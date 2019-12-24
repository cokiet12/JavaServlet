package kr.gudi.servlet.blog;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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

}
