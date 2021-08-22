import { Module } from "../core/module";
import { random } from "../utils";

export class SoundModule extends Module {
	#sounds;

	constructor(type, text) {
		super(type, text);
		this.#sounds = [
			"https://www.pacdv.com/sounds/voices/wow-2.wav",
			"https://www.pacdv.com/sounds/voices/bye-bye-1.wav",
			"https://www.pacdv.com/sounds/miscellaneous_sounds/magic-wand-1.wav",
			"https://www.pacdv.com/sounds/people_sound_effects/applause-1.wav",
			"https://www.pacdv.com/sounds/people_sound_effects/hmmmm.wav",
		];
	}

	trigger() {
		this.playSound(this.#sounds[random(0, this.#sounds.length - 1)]);
	}
	playSound(soundFile) {
		const $playerAudio = document.createElement("audio");
		$playerAudio.autoplay = "true";
		$playerAudio.hidden = "true";
		$playerAudio.src = soundFile;
	}
}
