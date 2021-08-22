import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.click = result;
        this.doubleClick = result1;

    }

    trigger() {
        this.oneTwoClicks();
        setTimeout(() => {
            
            alert(`Вы совершили одиночных кликов ${this.click}, двойных кликов ${this.doubleClick} за ${setTimeout[1]} секунд`);
        }, 10000);
        let timeIsOver = false;
            if (setTimeout) {
                timeIsOver = true;
        }
        console.log(timeIsOver);
    };
    

    oneTwoClicks() {

        let click = 0;
            document.addEventListener('click', function clk() {
            const result = ++click;
            console.log('one', result);
            if (timeIsOver === true) {
                document.removeEventListener('click', clk);
            }
});

        let doubleclick = 0;
            document.addEventListener('dblclick', function dblclk() {
                const result1 = ++doubleclick;
                console.log('double', result1);
                if (timeIsOver === true) {
                    document.removeEventListener('dblclick', dblclk);
                }
        }); 
    }

}