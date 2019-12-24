package kr.gudi.util;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Commons {
	
	public static void sendViewJSP(HttpServletRequest req, HttpServletResponse res, String view) {
		try {
			String location = req.getServletContext().getInitParameter("viewLocation");
			String ext = req.getServletContext().getInitParameter("viewExtension");
			String jsp = location + view + ext;
			
			String bootstrap = req.getServletContext().getInitParameter("bootstrap");
			String jquery = req.getServletContext().getInitParameter("jquery");
			
			req.setAttribute("bootstrap", bootstrap);
			req.setAttribute("jquery", jquery);			
			
			RequestDispatcher rd = req.getRequestDispatcher(jsp);
			rd.forward(req, res);
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}
	
	public static boolean loginCheck(HttpServletRequest req, HttpServletResponse res) {
		
		try {
			HttpSession session = req.getSession();
			Object id = session.getAttribute("id");
			if(id == null) {
				System.out.println("id 없음");
				res.sendRedirect("/blog/Login");
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return true;
	}

}
