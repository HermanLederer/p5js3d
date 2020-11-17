let width = 800;
let height = 600;

class Vertex {
	constructor(x, y, z, color) {
		this.pos = {x:x, y:y, z:z};
		this.color = color;
	}
}

class Camera {
	constructor(x, y, z) {
		this.pos = {x:x, y:y, z:z};
	}

	projectVertex(v) {
		let outVert = new Vertex(v.pos.x, v.pos.y, v.pos.z, v.color);
		outVert.pos.x -= this.pos.x;
		outVert.pos.y -= this.pos.y;
		outVert.pos.x *= 100;
		outVert.pos.y *= 100;

		outVert.pos.x += width / 2;
		outVert.pos.y += height / 2;

		return outVert;
	}
}

let cam;
let vert1;
let vert2;

function setup() {
	createCanvas(width, height);
	noCursor();

	cam = new Camera(0, 0, 0);

	vert1 = new Vertex(-1, -1, 1, color(255, 255, 255));
	vert2 = new Vertex(1, 1, 1, color(255, 255, 255));
}

function draw() {
	background(100);

	let projectedVert1 = cam.projectVertex(vert1);
	let projectedVert2 = cam.projectVertex(vert2);

	console.log(projectedVert2);
	drawPolygon(projectedVert1, projectedVert2);

	cam.pos.x = (mouseX) / width;
	cam.pos.y = (mouseY) / height;

	circle(mouseX, mouseY, 10);
}

function drawPolygon(v1, v2) {
	line(v1.pos.x, v1.pos.y, v2.pos.x, v2.pos.y);
}