import { Module } from "../core/module";

export class HearthRain extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {
		console.log("hearthRain");
	}
}
