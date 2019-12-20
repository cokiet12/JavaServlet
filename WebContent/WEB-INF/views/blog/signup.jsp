<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html oncontextmenu="return false">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Blog</title>
	<link rel="shortcut icon" type="image/x-icon" href="/img/icon_goodee.png">
	<link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="${bootstrap}css/bootstrap.min.css">
	<script src="${jquery}jquery.min.js"></script>
	<script src="${bootstrap}js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="/blog/css/commons.css">
</head>
<body>
	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>                        
	      </button>
	      <a class="navbar-brand" href="#">GDJ21</a>
	    </div>
	    <div class="collapse navbar-collapse" id="myNavbar">
	      <ul class="nav navbar-nav">
	      	<li><a href="/blog/Main">Home</a></li>
	      	<li class="active"><a href="#">Sign Up</a></li>
	      </ul>
	      <form class="navbar-form navbar-right" role="search">
	        <div class="form-group input-group">
	          <input type="text" class="form-control" placeholder="검색..">
	          <span class="input-group-btn">
	            <button class="btn btn-default" type="button">
	              <span class="glyphicon glyphicon-search"></span>
	            </button>
	          </span>        
	        </div>
	      </form>
	      <ul class="nav navbar-nav navbar-right">
	        <li><a href="/blog/SignUp"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      		<li><a href="/blog/Login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
	      </ul>
	    </div>
	  </div>
	</nav>
	  
	<div class="container">    
		<h1 class="text-center">Sign Up</h1>
		<form>
			<div class="form-group">
		    	<label class="control-label" for="id">Id:</label>
		      	<input type="text" class="form-control" id="id" name="id" required="required" placeholder="계정을 입력하세요.">
		  	</div>
		  	<div class="form-group">
		    	<label class="control-label" for="pwd">Password:</label>
		      	<input type="password" class="form-control" id="pwd" name="pwd" required="required" placeholder="비밀번호를 입력하세요.">
		  	</div>		  	
			
			<div class="form-group">
		    	<label class="control-label" for="name">Name:</label>
	      		<input type="text" class="form-control" id="name" name="name" required="required" placeholder="이름을 입력하세요.">
		  	</div>
			<div class="form-group">
		    	<label class="control-label" for="email">Email:</label>
	      		<input type="email" class="form-control" id="email" name="email" required="required" placeholder="이메일를 입력하세요.">
		  	</div>
		  	<div class="form-group">
		    	<label class="control-label" for="phone">Phone Cell:</label>
	      		<input type="tel" class="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="휴대전화번호를 입력하세요.">
		  	</div>
		  	
		  	<div class="form-group">
		      	<button type="submit" class="btn btn-success btn-block font-default">가입</button>
			</div>
		</form>
			  
    </div>
	    
	<footer class="container-fluid text-center">
	  <p>Copyright ⓒ GooDee Academy. All rights reserved.</p>
	</footer>
</body>
</html>