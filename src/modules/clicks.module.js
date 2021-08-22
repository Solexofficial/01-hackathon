import { Module } from "../core/module";

export class ClicksModule extends Module {
	#ms;
	constructor(type, text) {
		super(type, text);
		this.#ms = 1000;
		this.countClick = 0;
		this.countDoubleClick = 0;
		this.timeIsOver = false;
	}

	trigger() {
		this.timeIsOver = false;
		this.oneTwoClicks();
		setTimeout(() => {
			alert(
				`Вы совершили одиночных кликов ${this.countClick}, двойных кликов ${this.countDoubleClick} за ${
					this.#ms / 1000
				} секунд`
			);
			this.timeIsOver = true;
		}, this.#ms);
	}

	oneTwoClicks() {
		document.addEventListener("click", function clk() {
			this.countClick++;
			console.log(this.countClick);
			if (this.timeIsOver === true) {
				document.removeEventListener("click", clk);
			}
		});

		document.addEventListener("dblclick", function dblclk() {
			this.countDoubleClick++;
			console.log(this.countDoubleClick);
			if (this.timeIsOver === true) {
				document.removeEventListener("dblclick", dblclk);
			}
		});
	}
}
