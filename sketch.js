var viewPortWidth = window.innerWidth;
console.log("Width", viewPortWidth);


var pointList = new Array;
var remain = viewPortWidth;

function makeHeightList(pointList) {
	this.heightList = new Array;
	console.log(pointList.length);
	for (q in pointList) {
		this.heightList.push(int(random( -50,125)));
	};
	return this.heightList
}

function funkyGraph(color, pointList, heightList, y) {
	beginShape();
	noStroke();
	fill(color[0],color[1],color[2], 80);
	var x = 0;
	vertex(0,y);
	for (p in pointList) {
		vertex(x + pointList[p], y + heightList[p]);
		x = x + pointList[p];
	}
	endShape();		
}

function setup() {
	createCanvas(viewPortWidth, 500);
  	background(30);
  	frameRate(30);
	while (remain > 0) {
		var divider = int(random(5,20));
		var nextPoint = int(remain / divider);
		//console.log("NextPoint: ", nextPoint);
		if (nextPoint < 10) {
			console.log('TJOHEJ!');
			pointList.push(remain);
			break;
		}
		pointList.push(nextPoint);
		remain = remain - nextPoint;
	}

	heightHolder = new Array;
	for (var i = 0; i < 4; i++) {
		heightHolder[i] = makeHeightList(pointList);
	}

	console.log(heightHolder);

}

function draw() {
	for (list in heightHolder) {
		for (item in heightHolder[list]) {
			var factor = int(random(-10,10));
			heightHolder[list][item] = heightHolder[list][item] + factor; 
		}
	}
	background(30); //reset canvas

	a = new funkyGraph([241,136, 0], pointList, heightHolder[0], 100);
	b = new funkyGraph([24, 243, 78], pointList, heightHolder[1], 200);
	c = new funkyGraph([90,19, 190], pointList, heightHolder[2], 300);
}