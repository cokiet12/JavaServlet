package kr.gudi.util;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Commons {
	
	public static void sendViewJSP(HttpServletRequest req, HttpServletResponse res, String view) {
		try {
			String location = req.getServletContext().getInitParameter("viewLocation");
			String ext = req.getServletContext().getInitParameter("viewExtension");
			String jsp = location + view + ext;
			RequestDispatcher rd = req.getRequestDispatcher(jsp);
			rd.forward(req, res);
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}

}
