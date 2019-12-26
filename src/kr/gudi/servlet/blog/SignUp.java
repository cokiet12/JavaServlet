package kr.gudi.servlet.blog;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.gudi.util.Commons;

@WebServlet("/blog/SignUp")
public class SignUp extends HttpServlet {
	
	public static List<Map<String, Object>> userList = new ArrayList<Map<String,Object>>();
	
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		Commons.sendViewJSP(req, res, "blog/signup");
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
		Enumeration<String> enume = req.getParameterNames();
		
		while (enume.hasMoreElements()) {
		       String paramName = enume.nextElement();
		       String paramValue = req.getParameter(paramName);
//		       System.out.println(paramName + " : " + paramValue);
		       paramMap.put(paramName, paramValue);
		}
		
		System.out.println(paramMap);
		userList.add(paramMap);
		
		res.sendRedirect("/blog/Login");
	}

}
