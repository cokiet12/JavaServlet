function drag(e){
	e.dataTransfer.setData("src", e.target.src);
}

function allow(e){
	e.preventDefault(); 
}

function drop(e){
	e.preventDefault();
	var src = e.dataTransfer.getData("src");
	var img = document.createElement("IMG");
	img.setAttribute("src", src);
	img.setAttribute("draggable", true);
	img.setAttribute("ondragstart", "drag(event)");
	e.target.appendChild(img);
}
function rest(){
	var size = document.getElementsByTagName("div").length;
	for(var i = 0; i < size; i++){
		document.getElementsByTagName("div")[i].innerHTML = "";
	}
}