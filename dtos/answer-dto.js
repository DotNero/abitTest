module.exports = class answerDto {
    day;
    month;
    year;
    img;
    rub_to_usd;

    constructor(day, month, year,img, rub){
        this.day = day;
        this.month = month;
        this.year = year;
        this.img = img;
        this.rub_to_usd = rub;
    }
}