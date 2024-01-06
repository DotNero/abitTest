module.exports = class answerDto {
    day;
    month;
    year;
    rub; 

    constructor(day, month, year, rub){
        this.day = day;
        this.month = month;
        this.year = year;
        this.rub = rub;
    }
}