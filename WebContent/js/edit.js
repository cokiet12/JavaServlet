var dataResource = {};
var gameResource = {};
function mapReset(){
	dataResource = {};
	gameResource = {};
	mapBlank();
}
function mapSave(){
	var title = document.getElementById("title");
	if(title.value == "") {
		title.style.backgroundColor = "#ffff00";
		alert("제목 입력해 주세요.");
		return;
	}
	
	var game = getObjData("game");
	var index = game.length;
	gameResource.title = title.value;
	gameResource.map = index;
	
	game[index] = gameResource;
	setObjData("game", game);
	setObjData(index, dataResource);
}
function itemView(){
	var items = ["man.png","point.png","replay.png","android.png","view_comfy.png"];
	var parent = document.getElementById("items");
	for(var i = 0; i < 5; i++){
		var url = items[i];
		var html = `
					<div class="col-xs-2 cursor-move">
		  				<img src="/img/${url}" draggable="true" ondragstart="drag(event)">
					</div>
				   `;
		parent.innerHTML += html; 
	}
}
function onLoad(){
	itemView();
	mapBlank();
}