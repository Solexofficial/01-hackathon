import { Module } from "../core/module";

export class ClicksModule extends Module {
	#ms;
	constructor(type, text) {
		super(type, text);
		this.#ms = 5000;
		this.countClick = -1;
		this.countDoubleClick = 0;
		this.timeIsOver = false;
		this.clickTrigger = this.getClicks.bind(this);
		this.doubleClickTrigger = this.getDoubleClicks.bind(this);
	}

	trigger() {
		this.countClick = -1;
		this.countDoubleClick = 0;
		this.getCountClicks();
	}

	getCountClicks() {
		this.timeIsOver = false;
		document.addEventListener("click", this.clickTrigger);
		document.addEventListener("dblclick", this.doubleClickTrigger);

		setTimeout(() => {
			alert(
				`Вы совершили одиночных кликов ${this.countClick}, двойных кликов ${this.countDoubleClick} за ${
					this.#ms / 1000
				} секунд`
			);
			this.timeIsOver = true;
		}, this.#ms);
	}

	getClicks() {
		if (this.timeIsOver) return;
		this.countClick++;
		console.log(this.countClick);
	}

	getDoubleClicks() {
		if (this.timeIsOver) return;
		this.countDoubleClick++;
		console.log(this.countDoubleClick);
	}
}
