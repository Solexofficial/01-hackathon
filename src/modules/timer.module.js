import { Module } from "../core/module";

export class TimerModule extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {
		let time = +prompt("Таймер отсчета: укажите время в сек.");

		const $timerContainer = document.createElement("div");
		$timerContainer.style.position = "absolute";
		$timerContainer.style.right = "10%";
		$timerContainer.style.top = "2%";

		const $timeLeft = document.createElement("div");
		$timeLeft.textContent = `Осталось ${time} секунд`;
		$timeLeft.style.fontWeight = 600;

		const $timerImg = document.createElement("img");
		$timerImg.style.display = "block";
		$timerImg.src =
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Icons8_flat_alarm_clock.svg/1200px-Icons8_flat_alarm_clock.svg.png";
		$timerImg.style.width = "50px";
		$timerImg.style.height = "50px";
		$timerImg.style.margin = "5px auto";

		$timerContainer.append($timerImg);
		$timerContainer.append($timeLeft);
		document.body.appendChild($timerContainer);

		setInterval(() => {
			$timeLeft.textContent = `Осталось ${--time} секунд`;
		}, 1000);
		setTimeout(() => {
			document.body.removeChild($timerContainer);
		}, time * 1000);
	}
}
