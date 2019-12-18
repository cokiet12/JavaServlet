var x = 0; 
var y = 0;
var i = 0;
var time = 30;
var timer; 
var dataResource = {};
var colSize = 0;
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
			i -= colSize;
			y--;
			break;
		case 39:  // 오른쪽
			i++;
			x++;
			break;
		case 40:  // 아래쪽
			i += colSize;
			y++;
			break;
		default:
			// 나머지
			break;
	}
	
	if(x < 0) {
		x = 0;
		i++;
	} else if(x > (colSize - 1)) {
		x = (colSize - 1);
		i--;
	}
	
	if(y < 0) {
		y = 0;
		i += colSize;
	} else if(y > 4) {
		y = 4;
		i -= colSize;
	}
	console.log(x, y, i);
	
	switch (dataResource[i]) {
	case "view_comfy.png":
		x = ox;
		y = oy;
		i = t;
		break;
	case "android.png":
		dataResource[0] = "man.png";
		delete dataResource[t];
		x = 0; 
		y = 0;
		i = 0;
		alert("당신은 운명하셨습니다.");
//		startView();
		mapBlank(true);
		setMap();
		break;
	case "point.png":
		alert("축!");
		location.reload();
		break;
	case "replay.png":
		alert("돌아 갔니?");
		x = ox;
		y = oy;
		i = t;
		break;
	default:
		delete dataResource[t];
		dataResource[i] = "man.png";
//		startView();
		mapBlank(true);
		setMap();
		break;
}
}
function mapStart(){
	timer = setInterval("intervalEvent()", 1000);
}
function mapStop(){
	clearInterval(timer);
	time = 30;
	var target = document.getElementById("time");
	target.innerHTML = time + "초";
}
function intervalEvent(){
	time--;
	if(time < 0) {
		alert("시간 초과 하였습니다.");
		mapStop();
		return;
	}
	var target = document.getElementById("time");
	target.innerHTML = time + "초";
}
function getParam(){
	var start = location.search.lastIndexOf("=") + 1;
	var end = location.search.length;
	var param = location.search.substring(start, end);
	var game = getObjData("game");
	document.getElementById("title").value = game[param].title;
	
	dataResource = getObjData(param);
	setMap();
	
	var TotSize = document.getElementsByClassName("grid").length;
	colSize = TotSize / 5;
}
function setMap(){
	var parent = document.getElementsByClassName("grid");
	for(var key in dataResource) {
		var html = `
					<img src="/img/${dataResource[key]}">
				   `;
		parent[key].innerHTML = html;
	}
}
function onLoad(){
	mapBlank(true);
	getParam();
}






