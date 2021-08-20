import { Module } from "../core/module";
import { random } from "../utils";
export class ShapeModule extends Module {
	#shapes;
	constructor(type, text) {
		super(type, text);
		this.#shapes = [
			{
				shape: "square",
				width: "100",
				height: "100",
				background: "red",
			},
			{
				shape: "rectangle",
				width: "200",
				height: "100",
				background: "red",
			},
		];
	}

	trigger() {
		this.createShape(this.#shapes[random(0, this.#shapes.length - 1)]);
	}

	createShape(shape) {
		const ms = random(2, 7);
		const { shape: figure, width, height, background } = shape;
		const $shape = document.createElement("div");
		const $timer = document.createElement("span");
		$shape.style.width = `${width}px`;
		$shape.style.height = `${height}px`;
		$shape.style.background = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
		$shape.style.display = "flex";
		$shape.style.justifyContent = "center";
		$shape.style.alignItems = "center";
		$shape.style.position = "absolute";
		$shape.style.right = `${random(0, window.innerWidth - width)}px`;
		$shape.style.top = `${random(height, window.innerHeight - height)}px`;

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
