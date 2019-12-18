var dataResource = {};
function print(){
	var parent = document.getElementById("list");
	parent.innerHTML = "";
	for(var key in dataResource){
		var data = dataResource[key];
		var html = `
					<div class="col-sm-3 cursor-pointer text-center" onclick="onClick(${key})">
						<h2>${data.title}</h2>
					</div>
					`;
		parent.innerHTML = html + parent.innerHTML;
	}
}
function onClick(key){
	var data = dataResource[key];
	actionURL("/Run?map=" + data.map);
}
function onLoad(){
	dataResource = getObjData("game");
	print();
}