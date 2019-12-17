<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>입력 및 수정 화면</title>
<link rel="shortcut icon" type="image/x-icon" href="http://gudi.kr/images/icon_goodee.png">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="/css/commons.css">
<script type="text/javascript" src="/js/commons.js"></script>
<script type="text/javascript" src="/js/edit.js"></script>
</head>
<body onload="onLoad()">
	<header class="container-fluid text-center default-bg">
	  <h1>미로 찾기</h1>
	  <p>나만의 미로를 찾아 보세요.</p> 
	</header>
	<br>
	<section class="container">
		<form class="form-horizontal" action="/action_page.php">
    		<div class="form-group">
      			<label class="control-label col-sm-1" for="title">Title:</label>
      			<div class="col-sm-11">
        			<input type="text" class="form-control" id="title" placeholder="제목을 입력하세요." name="title" onmouseup="mouseActive(this)" onkeydown="mouseOut(this)">
      			</div>
    		</div>
    		<div class="btn-group btn-group-justified">
			  <a href="javascript:mapReset()" class="btn btn-danger">초기화</a>
			  <a href="javascript:mapSave()" class="btn btn-success">저장</a>
			  <a href="javascript:mapCancel()" class="btn btn-warning">취소</a>
			</div>
    	</form>
	</section>
	<br>
	<section class="container">
		<div class="row text-center" id="items"></div>
	</section>
	<br>
	<section class="container">
		<article class="row text-center" id="map"></article>
	</section>
	<br>
	<footer class="container-fluid default-bg">
		<h1 class="text-center">GooDee</h1>
	</footer>
</body>
</html>