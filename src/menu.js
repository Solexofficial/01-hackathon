import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		window.addEventListener("contextmenu", e => {
			e.preventDefault();
			const { pageX, pageY } = e;
			console.log(pageX, pageY);
			this.open(pageX, pageY);
		});
	}

	open(posX, posY) {
		this.el.classList.add("open");
		this.el.style.left = `${posX}px`;
		this.el.style.top = `${posY}px`;
		// const $menuItems = document.querySelectorAll(".menu-item");
		// console.log($menuItems);
		// console.log(this.el);
		// $menuItems.forEach(item =>
		// 	item.addEventListener("click", e => {
		// 		console.log(e.target.dataset.type);
		// 	})
		// );
	}

	close() {
		this.el.classList.remove("open");
	}

	add(module) {
		const $el = module.toHTML();
		this.el.insertAdjacentHTML("afterbegin", $el);
	}
}
