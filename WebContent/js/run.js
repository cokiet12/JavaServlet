var x = 0; 
var y = 0;
var i = 0;
var time = 360;
var timer; 
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
			i -= 6;
			y--;
			break;
		case 39:  // 오른쪽
			i++;
			x++;
			break;
		case 40:  // 아래쪽
			i += 6;
			y++;
			break;
		default:
			// 나머지
			break;
	}
	
	if(x < 0) {
		x = 0;
		i++;
	} else if(x > 5) {
		x = 5;
		i--;
	}
	
	if(y < 0) {
		y = 0;
		i += 6;
	} else if(y > 4) {
		y = 4;
		i -= 6;
	}
	console.log(x, y, i);
}
function mapStart(){
	timer = setInterval("intervalEvent()", 1000);
}
function mapStop(){
	clearInterval(timer);
	time = 360;
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
function onLoad(){
	mapBlank(true);
}