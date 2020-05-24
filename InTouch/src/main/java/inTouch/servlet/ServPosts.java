package inTouch.servlet;

import inTouch.entity.Post;
import inTouch.entity.Posts;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/tweets/*")
public class ServPosts extends HttpServlet {
    private static Posts posts = new Posts();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("application/json");
        String id = request.getParameter("id");
        Post y = posts.getPost(id);
        response.getWriter().print((new Gson()).toJson(y));
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("application/json");
        String id = request.getParameter("id");
        response.getWriter().print((new Gson()).toJson(posts.removePost(id)));
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("text");
        PrintWriter pw = response.getWriter();
        try {
            List<Post> page = posts.getPage();
            for(Post item : page) {
                pw.println("{\"id\": " + item.id + "," + "{\"date\": " + item.createdAt + "," + "\"author\": " + item.author + "}");
            }
        }
        catch (Exception e){       }
        pw.close();

       /* response.setContentType("application/json");
        Gson gson = new Gson();
        String[] url = request.getRequestURI().split("/");
        if (url.length == 3 && url[2].equals("search")) {
            response.getWriter().print(posts.getPage().stream().map(gson::toJson).collect(Collectors.joining("\n")));
        }*/
    }
} 