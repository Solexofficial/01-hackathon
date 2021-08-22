import { Module } from "../core/module";
import { random } from "../utils";
export class ShapeModule extends Module {
	#shapes;
	constructor(type, text) {
		super(type, text);
		this.#shapes = [
			{
				shape: "square",
				width: 100,
				height: 100,
			},
			{
				shape: "rectangle",
				width: 100,
				height: 50,
			},
			{
				shape: "Circle",
				width: 50,
				height: 50,
				borderRadius: "50px",
			},
			{
				shape: "Oval",
				width: 100,
				height: 50,
				borderRadius: "100px / 50px",
			},
			{
				shape: "triangle",
				width: 100,
				height: 100,
				clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
			},
			{
				shape: "hexagon",
				width: 100,
				height: 100,
				clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
			},
		];
	}

	trigger() {
		this.createShape(this.#shapes[random(0, this.#shapes.length - 1)]);
	}

	createShape(shape) {
		const ms = random(2, 7);
		const randomPos = random(1, 5);
		const { width, height, borderRadius, clipPath } = shape;
		const $shape = document.createElement("div");
		const $timer = document.createElement("span");
		$shape.style.width = `${width * randomPos}px`;
		$shape.style.height = `${height * randomPos}px`;
		$shape.style.background = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
		$shape.style.display = "flex";
		$shape.style.justifyContent = "center";
		$shape.style.alignItems = "center";
		$shape.style.position = "absolute";
		$shape.style.right = `${random(0, window.innerWidth - width * randomPos)}px`;
		$shape.style.top = `${random(height, window.innerHeight - height * randomPos)}px`;
		if (borderRadius) {
			$shape.style.borderRadius = borderRadius;
		}
		if (clipPath) {
			$shape.style.clipPath = clipPath;
		}

		$timer.textContent = ms;
		$timer.style.color = "#fff";
		$timer.style.fontSize = "20px";
		$shape.appendChild($timer);
		setInterval(() => {
			$timer.textContent--;
		}, 1000);
		document.body.append($shape);
		setTimeout(() => {
			document.body.removeChild($shape);
		}, ms * 1000);
	}
}
