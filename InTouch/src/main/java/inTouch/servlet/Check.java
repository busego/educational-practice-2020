package inTouch.servlet;

import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/check")
public class Check extends HttpServlet {
    static class JsonResponse {
        public boolean success;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        JsonResponse Jres = new JsonResponse();
        Jres.success = true;
        Gson gson = new Gson();
        response.getWriter().print(gson.toJson(Jres));
    }
}
