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
	var size = document.getElementsByTagName("div").length;
	for(var i = 0; i < size; i++){
		document.getElementsByTagName("div")[i].innerHTML = "";
	}
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
var x = 0; var y = 4;
var i = 20;
function keyEvent(e){
//	console.log(e.keyCode);
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
	
	console.log(x, y, i);
}

