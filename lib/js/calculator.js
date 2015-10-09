/*
	TODO
*/

var reset = function() {
	screen.length = 0;
 	$("#screen p").html("");
 	resetNextClick = false;
}

var updateScreen = function() {
	$("#screen p").text(screen.join(" "));
}

var addToNum = function(num) {
	screen[screen.length-1] += num;
	updateScreen();
}

var startNewNum = function(num) {
	screen.push(num);
	updateScreen();
}

var screen = [];
var text   = "";
var resetNextClick = false;

//waitingForOp is a switch that is true when the calculator is ready to recieve an operator
var waitingForOp = false;

$(function() {

	$("#clear").click(function() {
 		reset();
 	});
    
	$(".digit p").click(function() {
		if(resetNextClick) reset();

		if(waitingForOp && screen.length > 0) {
			if((screen[screen.length-1].indexOf(".") > -1) && this.innerHTML == ".") return;
			if((screen[screen.length-1] == "0" && this.innerHTML != ".")) {
				screen[screen.length - 1] = this.innerHTML;
				updateScreen();
				return;
			}
			addToNum(this.innerHTML);
		} else {
			startNewNum(this.innerHTML);
			waitingForOp = true;
		}
	});


	$(".op p").click(function() {	
		if(resetNextClick) resetNextClick = false;

		if(waitingForOp) {
			if(screen[screen.length-1] != ".") {
				startNewNum(this.innerHTML);
				waitingForOp = false;
			}
		}
 	});

 	$("#switchsign").click(function() {
 		if(screen.length > 0) {
 			screen[screen.length-1] *= -1;
 			updateScreen();
 		}
 	});

 	$("#equals").click(function() {
 		for(var i = 0; i < screen.length; i++) {
			if(screen[i] == '*' || screen[i] == '/') {
				screen[i] = screen[i] == '*' ? screen[i-1] * screen[i+1] : screen[i-1] / screen[i+1];
				screen.splice(i+1, 1);
				screen.splice(i-1, 1);
				i--;
			} 
		} 

		for(var i = 0; i < screen.length; i++) {
			if(screen[i] == '+' || screen[i] == '-') {
				screen[i] = screen[i] == '+' ? 1*screen[i-1] + 1*screen[i+1] : 1*screen[i-1] - 1*screen[i+1];
				screen.splice(i+1, 1);
				screen.splice(i-1, 1);
				i--;
			}
		} 

		updateScreen();
		resetNextClick = true;
 	});

});