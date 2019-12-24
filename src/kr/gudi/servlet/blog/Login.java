package kr.gudi.servlet.blog;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kr.gudi.util.Commons;

@WebServlet("/blog/Login")
public class Login extends HttpServlet {
	
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		Commons.sendViewJSP(req, res, "blog/login");
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		
		String id = req.getParameter("id");
		String pwd = req.getParameter("pwd");
		
		HttpSession session = req.getSession();
//		ServletContext sc = session.getServletContext();
//		String path = sc.getContextPath();
//		System.out.println("---1");
//		System.out.println(path);
//		System.out.println("---2");
		
		if("root".equals(id)) {
			if("1234".equals(pwd)) {
				res.getWriter().print("1");
//				res.sendRedirect("/blog/Profile");
				
				session.setAttribute("id", id);
				session.setAttribute("name", "구디");
				
				return;
			}
		}
//		res.sendRedirect("/blog/Login");
		res.getWriter().print("2");
	}

}
