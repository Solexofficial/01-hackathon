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

        let a = document;

        let click = 0;
            a.document.addEventListener('click', () => {
            const result = ++click;
            console.log('one', result);
});

        let doubleclick = 0;
            a.document.addEventListener('dblclick', () => {
                const result1 = ++doubleclick;
                console.log('double', result1);
        }); 
    }

}