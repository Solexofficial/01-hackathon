import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		window.addEventListener("contextmenu", e => {
			e.preventDefault();
			const { pageX, pageY } = e;
			console.log(pageX, pageY);
			this.open();
		});
	}

	open() {
		console.log(this.el);
		this.el.classList.add("open");
	}

	close() {
		this.el.classList.remove("open");
	}

	add(module) {
		const $el = document.createElement("li");
		$el.classList.add("menu-item");
		$el.textContent = module.text;
		this.el.appendChild($el);
	}
}
