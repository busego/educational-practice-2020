package inTouch.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;
import javax.servlet.http.HttpServletRequest;

@WebFilter(urlPatterns = "/*")
public class TFilter implements Filter{
    @Override
    public void init(FilterConfig filterConfig) {
    }

    @Override
    public void doFilter (ServletRequest request, ServletResponse response, FilterChain fChain) throws IOException, ServletException {
        long start = System.currentTimeMillis();
        fChain.doFilter(request, response);
        long end = System.currentTimeMillis();

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String method = httpRequest.getMethod();
        String rUrl = httpRequest.getRequestURL().toString();

        System.out.println("\n" + method + "(" + rUrl + ") " + (end - start) + " ms");
    }

    @Override
    public void destroy (){

    }
}
