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
        String method = httpRequest.getMethod();
        String url = String.valueOf(httpRequest.getRequestURL());

        System.out.println("\n" + method + " - " + url + " - " + (end - start) + "ms");


    }

    public void init(FilterConfig config) throws ServletException {

    }

}
