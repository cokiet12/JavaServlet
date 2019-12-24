package kr.gudi.servlet.blog;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kr.gudi.util.Commons;

@WebServlet("/blog/LoginCheck")
public class LoginCheck extends HttpServlet {
	
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		HttpSession session = req.getSession();
		
		Object id = session.getAttribute("id");
		Object name = session.getAttribute("name");
		
		if(id == null) {
			System.out.println("id 없음");
		}
		
		if(name == null) {
			System.out.println("name 없음");
		}
		
		System.out.println("------");
		
		System.out.println(id);
		System.out.println(name);
		
		System.out.println("------");
		
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		req.setCharacterEncoding("UTF-8");
		HttpSession session = req.getSession();
		Object id = session.getAttribute("id");
		if(id == null) {
			res.getWriter().print("0");
		}else {
			res.getWriter().print("1");
		}
		
		
//		if(Commons.loginCheck(req, res)) {
//			res.getWriter().print("1");
//		} else {
//			res.getWriter().print("0");
//		}
		
	}

}
