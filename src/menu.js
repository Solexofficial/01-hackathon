import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";

export class ContextMenu extends Menu {
	#modules;
	constructor(selector) {
		super(selector);
		this.#modules = {
			background: new BackgroundModule("bg", "bg change"),
			clicks: new ClicksModule("clicker", "click counter"),
			shape: new ShapeModule("shape", "create shape"),
		};

		for (const module in this.#modules) {
			this.add(this.#modules[module]);
		}

		window.addEventListener("contextmenu", e => {
			e.preventDefault();
			const { pageX, pageY } = e;
			this.open(pageX, pageY);
		});

		const $menuItems = document.querySelectorAll(".menu-item");
		$menuItems.forEach(item =>
			item.addEventListener("click", e => {
				const data = e.target.dataset.type;
				for (const module in this.#modules) {
					if (this.#modules[module].type === data) {
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
