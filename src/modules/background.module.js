import {Module} from '../core/module'
import {random} from '../utilis'

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        this.changeBackgroundColor();
    }

    changeBackgroundColor() {
        let a = random(0, 255);
        let b = random(0, 255);
        let c = random(0, 255);
        document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    }
}