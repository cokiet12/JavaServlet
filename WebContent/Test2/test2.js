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
	e.target.appendChild(img);
	
	// 위치값 구하기
	var children = target.parentNode.children;
	var parent = target.parentNode;
	for(var index = 0; index < children.length; index++){
	  if(target == children[index]){
	     resource[index] = src;
	  }
	}
	
	localStorage.setItem("grid", JSON.stringify(resource));
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
