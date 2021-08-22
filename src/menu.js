import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";
import { TimerModule } from "./modules/timer.module";
import { AutoWriteText } from "./modules/auto-write-text.module";
import { HearthRain } from "./modules/hearth-rain.module";
import { SoundModule } from "./modules/sound.module";
import { DaysTillNewYearModule } from "./modules/days_till_ny.module";

export class ContextMenu extends Menu {
	#modules;
	constructor(selector) {
		super(selector);
		this.#modules = {
			background: new BackgroundModule("bg", "Bg change"),
			clicks: new ClicksModule("clicker", "Click counter"),
			shape: new ShapeModule("shape", "Create shape"),
			timer: new TimerModule("timer", "Create timer"),
			autoWriteText: new AutoWriteText("auto-write-text", "Auto write text"),
			heartRain: new HearthRain("hearth-rain", "Hearth Rain"),
			randomSound: new SoundModule("sound", "Random sound"),
			daysTillNy: new DaysTillNewYearModule("ny", "Days to New Year"),
		};

		for (const module in this.#modules) {
			if (module) {
				this.add(this.#modules[module]);
			}
		}

		window.addEventListener("contextmenu", e => {
			e.preventDefault();
			const { pageX, pageY } = e;
			this.open(pageX, pageY);
		});

		const $menuItems = document.querySelectorAll(".menu-item");
		$menuItems.forEach(item =>
			item.addEventListener("click", e => {
				for (const module in this.#modules) {
					if (this.#modules[module].type === e.target.dataset.type) {
						this.#modules[module].trigger();
						this.close();
					}
				}
			})
		);
	}

	open(posX, posY) {
		this.el.classList.add("open");
		this.el.style.left = `${posX}px`;
		this.el.style.top = `${posY}px`;
	}

	close() {
		this.el.classList.remove("open");
	}

	add(module) {
		const $el = module.toHTML();
		this.el.insertAdjacentHTML("afterbegin", $el);
	}
}
