// Planar coordinates
function point(x, y) {
	return {
	'x': x,
	'y': y
	};
}

function distance(point1, point2) {
		var result = Math.sqrt( (point2.x - point1.x)*(point2.x - point1.x) +
						  (point2.y - point1.y)*(point2.y - point1.y) );
		return result;
	}

function canTriangle() {
	if ( (line1 + line2 > line3) &&
	   	 (line1 + line3 > line2) &&
	   	 (line2 + line3 > line1) ) {
	return true;
	} else {
	return false;
	}
}

var p1 = point(3, 4);
var p2 = point(5, 2);
var p3 = point(5, 9);
var p4 = point(1, 3);
var p5 = point(6, 8);
var p6 = point(4, 2);

var line1 = distance(p1, p2); // 2.83
var line2 = distance(p3, p4); // 7.21
var line3 = distance(p5, p6); // 6.32

// var arr = [line1, line2, line3];
// console.log(arr);

console.log(p1, p2);
console.log(distance(p1, p2));
console.log(canTriangle());	// Returns false when it should be true. Go figure!