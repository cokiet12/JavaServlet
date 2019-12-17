var resource = {};
function drag(e){
	e.dataTransfer.setData("src", e.target.src);
}
function allow(e){
	e.preventDefault(); 
}
function drop(e, target){
	e.preventDefault();
	var src = e.dataTransfer.getData("src");
	var img = document.createElement("IMG");
	img.setAttribute("src", src);
	img.setAttribute("draggable", true);
	img.setAttribute("ondragstart", "drag(event)");
	target.innerHTML = "";
	target.appendChild(img);
	
	// 위치값 구하기
	var children = target.parentNode.children;
	var parent = target.parentNode;
	for(var index = 0; index < children.length; index++){
	  if(target == children[index]){
	     resource[index] = src;
	  }
	}
	
	localStorage.grid = JSON.stringify(resource);
	
}
function rest(){
	var size = document.getElementsByClassName("grid").length;
	for(var i = 0; i < size; i++){
		document.getElementsByClassName("grid")[i].innerHTML = "";
	}
	resource = {};
	localStorage.grid = "";
}
function reloadView(){
	if(localStorage.grid){
		resource = JSON.parse(localStorage.grid);
		for(var key in resource){
		   var img = document.createElement("IMG");
		   img.setAttribute("src", resource[key]);
		   img.setAttribute("draggable", true);
		   img.setAttribute("ondragstart", "drag(event)");
		   document.getElementsByClassName("grid")[key].appendChild(img);
		}
	}
}

var x = 0; 
var y = 0;
var i = 0;
function startView(){
	var map = document.getElementById("map");
	map.innerHTML = "";
	for(var i = 0; i < 25; i++){
		map.innerHTML += '<div class="grid"></div>';
	}
	printView();
}
resource = JSON.parse(localStorage.grid);
function printView(){
	if(localStorage.grid){
//		resource = JSON.parse(localStorage.grid);
		for(var key in resource){
			var src = resource[key];
			var html = `<img src="${src}">`;
			document.getElementsByClassName("grid")[key].innerHTML = html;
		}
	}
}
function keyEvent(e){
	var t = i;
	var ox = x;
	var oy = y;
	switch (e.keyCode) {
		case 37:  // 왼쪽
			i--;
			x--;
			break;
		case 38:  // 위쪽
			i -= 5;
			y--;
			break;
		case 39:  // 오른쪽
			i++;
			x++;
			break;
		case 40:  // 아래쪽
			i += 5;
			y++;
			break;
		default:
			// 나머지
			break;
	}
	
	// 좌표 예외 처리
	if(x < 0) {
		x = 0;
		i++;
	} else if(x > 4) {
		x = 4;
		i--;
	}
	
	if(y < 0) {
		y = 0;
		i += 5;
	} else if(y > 4) {
		y = 4;
		i -= 5;
	}
	// 좌표 예외 처리 
	
	// 이미지 예외 처리
	switch (resource[i]) {
		case "http://localhost:8080/img/view_comfy.png":
			x = ox;
			y = oy;
			i = t;
			break;
		case "http://localhost:8080/img/android.png":
			resource[0] = "http://localhost:8080/img/man.png";
			delete resource[t];
			x = 0; 
			y = 0;
			i = 0;
			alert("당신은 운명하셨습니다.");
			startView();
			break;
		case "http://localhost:8080/img/point.png":
			alert("축!");
			location.reload();
			break;
		case "http://localhost:8080/img/replay.png":
			alert("돌아 갔니?");
			x = ox;
			y = oy;
			i = t;
			break;
		default:
			delete resource[t];
			resource[i] = "http://localhost:8080/img/man.png";
			startView();
			break;
	}
	// 이미지 예외 처리
}

