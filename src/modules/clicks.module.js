import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.clicks = result;
        this.doubleClicks = result1;

    }

    trigger() {
        this.oneTwoClicks();
    }

    oneTwoClicks() {

        let click = 0;
            document.addEventListener('click', () => {
            const result = ++click;
            console.log('one', result);
});

        let doubleclick = 0;
            document.addEventListener('dblclick', () => {
                const result1 = ++doubleclick;
                console.log('double', result1);
        }); 
    }

}