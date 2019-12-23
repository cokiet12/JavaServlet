package kr.gudi.servlet.blog;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.gudi.util.Commons;

@WebServlet("/blog/LoginService")
public class LoginService extends HttpServlet {
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		System.out.println("doPost()");
		
		req.setCharacterEncoding("UTF-8");
		
		String id = req.getParameter("id");
		String pwd = req.getParameter("pwd");
		System.out.println("id : " + id);
		System.out.println("pwd : " + pwd);
		
		if("root".equals(id)) {
			if("1234".equals(pwd)) {
//				res.getWriter().print("1");
				res.sendRedirect("/blog/Profile");
				return;
			}
		}
		res.sendRedirect("/blog/Login");
//		res.getWriter().print("2");
	}

}
