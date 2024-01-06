const xkcdService = require('../service/xkcdService')
const rubService = require('../service/rubService')
const Answer = require('../dtos/answer-dto')

// const {validationResult} = require('express-validator');

class xkcdController{
    async xkcdGetIDS(req,res,next){

        const {ids} = req.body
        const arr = ids.split(','); // проверено, работает
        let data = [];
        for(const id of arr){
            // console.log(id)
            const {day, month, year} = await xkcdService.getData(id)
            const rub = await rubService.getDollar(day, month, year)
            const answer = new Answer(day, month, year, 100)
            console.log(day, month, year)
            data.push(answer)
        }
        return res.send(JSON.stringify(data, null, 2))

        }
    }

module.exports = new xkcdController();