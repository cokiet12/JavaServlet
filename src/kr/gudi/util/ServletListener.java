package kr.gudi.util;

import java.text.SimpleDateFormat;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class ServletListener implements ServletContextListener {

	SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy년 MM월dd일 HH시mm분ss초");
	
	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		System.out.println("Servlet Stop >> " + sdFormat.format(System.currentTimeMillis()));
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		System.out.println("Servlet Start >> " + sdFormat.format(System.currentTimeMillis()));
	}

}
