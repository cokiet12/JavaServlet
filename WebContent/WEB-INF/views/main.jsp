<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>메인화면</title>
<link rel="shortcut icon" type="image/x-icon" href="/img/icon_goodee.png">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${bootstrap}css/bootstrap.min.css">
<script src="${jquery}jquery.min.js"></script>
<script src="${bootstrap}js/bootstrap.min.js"></script>
<link rel="stylesheet" href="/css/commons.css">
<link rel="stylesheet" href="/css/main.css">
<script type="text/javascript" src="/js/commons.js"></script>
<script type="text/javascript" src="/js/main.js"></script>
</head>
<body onload="onLoad()">
	<header class="jumbotron text-center">
	  <h1>미로 찾기</h1>
	  <p>나만의 미로를 찾아 보세요.</p> 
	</header>
	<section class="container">
		<div class="btn-group btn-group-justified" id="btn">
			<a href="javascript:actionURL('/Edit')" class="btn btn-primary">생성</a>
		</div>
	</section>
	<section class="container">
		<article class="row" id="list"></article>
	</section>
	<br>
	<footer class="container-fluid default-bg">
		<h1 class="text-center">GooDee</h1>
	</footer>
	
	<!-- Modal -->
	<div class="modal fade" id="myModal" role="dialog">
	  <div class="modal-dialog">
	    <!-- Modal content-->
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title" id="modal-title"></h4>
	      </div>
	      <div class="modal-body">
	        <div class="btn-group btn-group-justified" id="btn">
			    <a href="javascript:actionURL('/Edit')" class="btn btn-primary">편집</a>
			    <a href="javascript:void" class="btn btn-primary">삭제</a>
			</div>
	      </div>
	    </div>
	  </div>
	</div>
</body>
</html>