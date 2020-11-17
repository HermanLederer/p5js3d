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
	let vert2 = new Vertex(800, 600, 0, color(255, 255, 255));

	line(vert1.pos.x, vert1.pos.y, vert2.pos.x, vert2.pos.y);
}
