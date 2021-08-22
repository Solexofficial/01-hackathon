import {Module} from '../core/module'

export class DaysTillNewYearModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        this.daysTillNY();
    }

    daysTillNY() {

        const today = new Date();
        if (today.getMonth == 11 && today.getDate == 31) {
            alert(`Новый год сегодня!!`);
        } else {
            const yearNumber = today.getFullYear();
            const newYearDate = new Date(yearNumber, 11, 31);
            const daysInMilsec = 1000 * 60 * 60 * 24;
            const daysCount = Math.ceil((newYearDate.getTime() - today.getTime()) / daysInMilsec);
            alert(`Дней до нового года: ${daysCount}`);
        }
    }
}