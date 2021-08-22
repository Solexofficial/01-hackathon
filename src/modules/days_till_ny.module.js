import { Module } from "../core/module";

export class DaysTillNewYear extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {
		this.daysTillNY();
	}

	daysTillNY() {
		const display = document.createElement("div");
		display.style.backgroundColor = "green";
		display.style.color = "red";
		display.style.margin = "auto";
		display.style.width = "50%";
		display.style.textAlign = "center";
		display.style.fontSize = "80px";

		const today = new Date();
		if (today.getMonth == 11 && today.getDate == 31) {
			display.textContent = `новый год сегодня!!`;
		} else {
			const yearNumber = today.getFullYear();
			const newYearDate = new Date(yearNumber, 11, 31);
			const daysInMilsec = 1000 * 60 * 60 * 24;
			const daysCount = Math.ceil((newYearDate.getTime() - today.getTime()) / daysInMilsec);
			display.textContent = `Сколько же дней осталось до Нового Года?  ===> ${daysCount}!`;
		}
		document.body.append(display);
	}
}
