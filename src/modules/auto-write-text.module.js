import { Module } from "../core/module";

export class AutoWriteText extends Module {
	#userText;
	#textContainer;
	#index;
	#interval;
	constructor(type, text) {
		super(type, text);
		this.#userText = "";
		this.#index = 0;
		this.#textContainer;
	}

	trigger() {
		this.#userText = prompt("Введите текст");
		this.#textContainer = document.createElement("div");
		this.#textContainer.style.fontSize = "26px";
		this.#textContainer.style.fontWeight = "600";

		document.body.appendChild(this.#textContainer);
		console.log("auto-writer triggered");
		this.#interval = setInterval(this.writeText.bind(this), 100);
	}

	writeText() {
		this.#textContainer.innerText = this.#userText.slice(0, this.#index);
		this.#index++;

		if (this.#index > this.#userText.length) {
			this.#index = 0;
			clearInterval(this.#interval);
			setTimeout(() => {
				document.body.removeChild(this.#textContainer);
			}, 2000);
		}
	}
}
