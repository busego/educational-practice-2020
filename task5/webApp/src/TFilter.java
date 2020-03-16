import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class TFilter implements Filter {
    public void destroy() {
    }


    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        long start = System.currentTimeMillis();
        chain.doFilter(req, resp);
        long end = System.currentTimeMillis();

        HttpServletRequest httpRequest = (HttpServletRequest) req;
        String path;

        path = ((HttpServletRequest) req).getRequestURL().toString();

        //String path = req.getScheme() + "://"+ req.getLocalAddr() + ((HttpServletRequest) req).getRequestURI();
        String method = httpRequest.getMethod();
        System.out.println(String.format("%s '%s' - done(%ms)", method , path, end-start));
       /* try {
            resp.getWriter().println(String.format("%s '%s' - done(%d ms)", method, path, end - start));
        } catch (Exception e){
            System.out.println(String.format("%s '%s' - done(%ms)", method , path, end-start));
        }*/


    }

    public void init(FilterConfig config) throws ServletException {

    }

}
