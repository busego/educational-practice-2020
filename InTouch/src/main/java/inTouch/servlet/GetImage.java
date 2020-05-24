package inTouch.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.*;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Collection;
import java.util.UUID;

@WebServlet("/tweet")
@MultipartConfig
public class GetImage extends HttpServlet {
    @Override
    //http://localhost:8080/TwitterApp_war/tweet?filename=482bd0fd-88d6-4b96-b47b-fd7497475bc4_image%2Fjpeg

    //name should be the saved one
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String path = "C:\\Egor\\Univer\\Програм\\pr_2020\\TwitterApp\\src\\main\\webapp\\Uploads\\";
        String pathErrorFile = "C:\\Egor\\Univer\\Програм\\pr_2020\\TwitterApp\\src\\main\\webapp\\resources\\erImage\\";

        String s = request.getParameter("filename");
        String contType = s.substring(s.indexOf("_") + 1);
        File file = new File(path + URLEncoder.encode(s, StandardCharsets.UTF_8));
        if (file.exists()) {
            try (FileInputStream inputStream = new FileInputStream(path + URLEncoder.encode(s, StandardCharsets.UTF_8))) {
                response.setContentType(contType);
                response.getOutputStream().write(inputStream.readAllBytes());
            } catch (Exception e) {
                try (FileInputStream inputStream = new FileInputStream(pathErrorFile + "notfound.jpg")) {
                    response.setContentType("image/jpg");
                    response.getOutputStream().write(inputStream.readAllBytes());
                } catch (Exception e2) {
                }
            }
        } else {
            try (FileInputStream inputStream = new FileInputStream(pathErrorFile + "notfound.jpg")) {
                response.setContentType("image/jpg");
                response.getOutputStream().write(inputStream.readAllBytes());
            } catch (Exception e) {
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Collection<Part> parts = request.getParts();
        for (Part part : parts) {
            if (part.getName().equals("image")) {
                InputStream stream = part.getInputStream();
                UUID uuid = UUID.randomUUID();
                String fImName = uuid.toString() + "_" + URLEncoder.encode(part.getContentType(), StandardCharsets.UTF_8);

                try (FileOutputStream fileOutputStream = new FileOutputStream("C:\\Egor\\Univer\\Програм\\pr_2020\\TwitterApp\\src\\main\\webapp\\Uploads\\" + fImName)) {
                    byte[] v = stream.readAllBytes();
                    fileOutputStream.write(v);
                } catch (Exception e) {
                    System.out.println(e.getMessage());
                }
            }
            response.getOutputStream().println("<html><body>The file has been uploaded</body></html>");
        }
    }
}