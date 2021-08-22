import { Module } from "../core/module";
import { random } from "../utils";

export class HearthRain extends Module {
	#rainInterval;
	#rainContainer;
	constructor(type, text) {
		super(type, text);
		this.#rainInterval;
		this.#rainContainer = this.createContainer();
	}

	trigger() {
		const $container = document.querySelector(".hearth-container");
		if ($container) {
			this.stopRain();
		}
		this.#rainContainer.innerHTML = "";
		document.body.appendChild(this.#rainContainer);

		this.#rainInterval = setInterval(this.createHearth.bind(this), 300);
		setTimeout(() => {
			this.stopRain();
		}, 5000);
	}

	createContainer() {
		const $hearthContainer = document.createElement("div");
		$hearthContainer.classList.add("hearth-container");
		$hearthContainer.style.width = "100vw";
		$hearthContainer.style.height = "100vh";

		return $hearthContainer;
	}

	createHearth() {
		const $hearth = document.createElement("span");
		$hearth.innerHTML = "&#128155";
		$hearth.style.fontSize = "20px";
		$hearth.style.position = "fixed";
		$hearth.style.top = "-3vh";
		$hearth.style.transform = "translateY(0)";
		$hearth.style.animation = "hearth-fall 3s linear";
		$hearth.style.animationDuration = `${random(2, 5)}s`;
		$hearth.style.left = `${random(0, 100)}vw`;
		this.#rainContainer.appendChild($hearth);
	}

	stopRain() {
		clearInterval(this.#rainInterval);
	}
}
