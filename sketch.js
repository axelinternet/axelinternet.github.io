var viewPortWidth = window.innerWidth;
console.log("Width", viewPortWidth);

var alpha = 0;
var pointList = new Array;
var remain = viewPortWidth;

window.addEventListener('deviceorientation', function(event) {
	alpha = event.alpha;

	if (event.webkitCompassHeading) {
		  alpha = event.webkitCompassHeading;
	  }

	alpha = int(alpha) 
	console.log("Compass", event.alpha, event.beta, event.gamma);

});
	  

function makeHeightList(pointList) {
	this.heightList = new Array;
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

function makePointList(minDiv, maxDiv) {
	while (remain > 0) {
		var divider = int(random(minDiv,maxDiv));
		var nextPoint = int(remain / divider);
		//console.log("NextPoint: ", nextPoint);
		if (nextPoint < 10) {
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

	console.log("Created pointlist with dividers:", minDiv, maxDiv);
}

function setup() {
	createCanvas(viewPortWidth, 500);
  	background(30);
  	frameRate(60);

  	makePointList(10,15);

	console.log(heightHolder);
}

var counter = 0;
function draw() {
	background(30); //reset canvas
	for (list in heightHolder) {
		for (var item = 0; item < heightHolder[list].length - 1; item++) {
			var factor = int(random(-5,5));
			heightHolder[list][item] = heightHolder[list][item] + factor; 
		}
	}		
	if (alpha == null) {
		if ( counter / 2 % 60 == 0) {
			makePointList( int(random(5,10)), int(random(10,20)));
		}
	} else {
		if (alpha % 20 == 0) { 
			makePointList( int(random(5,10)), int(random(10,20))); // Make new pointlist when arbitrary threshold is hit
		}
	}

	a = new funkyGraph([241,136, 0], pointList, heightHolder[0], 100);
	b = new funkyGraph([24, 243, 78], pointList, heightHolder[1], 200);
	c = new funkyGraph([90,19, 190], pointList, heightHolder[2], 300);


	counter += 1;

}