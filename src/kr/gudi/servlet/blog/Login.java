package kr.gudi.servlet.blog;

import java.io.IOException;
import java.util.Map;

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
		
		for(int i = 0; i < SignUp.userList.size(); i++) {
			
			Map<String, Object> userMap = SignUp.userList.get(i);
			Object userId = userMap.get("id");
			Object userPwd = userMap.get("pwd");
			Object UserName = userMap.get("name");
			
			if(userId.equals(id)) {
				if(userPwd.equals(pwd)) {
					res.getWriter().print("1");
	//				res.sendRedirect("/blog/Profile");
					
					session.setAttribute("id", id);
					session.setAttribute("name", UserName);
					
					return;
				}
			}
			
		}
		
//		res.sendRedirect("/blog/Login");
		res.getWriter().print("2");
	}

}
