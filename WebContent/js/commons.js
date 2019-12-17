function actionURL(url){
	document.location.href = url;
}
function getObjData(key){
	if(localStorage[key]){
		return JSON.parse(localStorage.getItem(key));
	} else {
		return {};
	}
}
function setObjData(key, value){
	localStorage.setItem(key, JSON.stringify(value));
}
function delObjData(key){
	localStorage.removeItem(key);
}
function drag(e){
	e.dataTransfer.setData("src", e.target.src);
}
function allow(e){
	e.preventDefault(); 
}
function drop(e, target){
	e.preventDefault();
	var src = e.dataTransfer.getData("src");
	var imgURL = src.substring(src.lastIndexOf("/") + 1, src.length);
	if(onlyItemCheck(imgURL)) {
		return;
	}
	
	var img = document.createElement("IMG");
	img.setAttribute("src", src);
	img.setAttribute("draggable", true);
	img.setAttribute("ondragstart", "drag(event)");
	target.innerHTML = "";
	target.appendChild(img);
	
	var children = target.parentNode.children;
	var parent = target.parentNode;
	for(var index = 0; index < children.length; index++){
	  if(target == children[index]){
		  dataResource[index] = imgURL;
	  }
	}
}
function onlyItemCheck(imgURL) {
	var check = false;
	var target = "";
	var target1 = "man.png";
	var target2 = "point.png";
	if(target1 == imgURL){
		target = target1;
	} else if(target2 == imgURL){
		target = target2;
	} else {
		return check;
	}
	for(var key in dataResource){
		if(dataResource[key] == target){
			check = true;
		}
	}
	return check;
}
function mapCancel(){
	actionURL("/Main");
}
function mapBlank(type){
	var parent = document.getElementById("map");
	var size = ((12 / 2) * 5);
	var html = "";
	parent.innerHTML = "";
	for(var i = 0; i < size; i++){
		if(type){
			html = `<div class="col-xs-2 grid"></div>`;
		} else {
			html = `<div class="col-xs-2 grid" ondrop="drop(event, this)" ondragover="allow(event)"></div>`;
		}
		parent.innerHTML += html; 
	}
}
function mouseActive(target){
	target.style.backgroundColor = "#ffff00";
}
function mouseOut(target){
	target.style.backgroundColor = "#ffffff";
}