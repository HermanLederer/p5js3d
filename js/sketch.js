let width = 800;
let height = 600;

class Vertex {
	constructor(x, y, z, color) {
		this.pos = {x:x, y:y, z:z};
		this.color = color;
	}
}

function setup() {
	createCanvas(width, height);
}

function draw() {
	background(100);
	
	let vert1 = new Vertex(0, 0, 0, color(255, 255, 255));
	let vert2 = new Vertex(1, 1, 1, color(255, 255, 255));

	let projectedVert1 = projectVertex(vert1);
	let projectedVert2 = projectVertex(vert2);

	drawPolygon(projectedVert1, projectedVert2);
}

function projectVertex(v)
{
	let outVert = new Vertex(v.pos.x * 100, v.pos.y * 100, v.pos.z, v.color);
	return outVert;
}

function drawPolygon(v1, v2)
{
	line(v1.pos.x, v1.pos.y, v2.pos.x, v2.pos.y);
}