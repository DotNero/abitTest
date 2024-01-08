const xkcdService = require('../service/xkcdService')
const rubService = require('../service/rubService')
const Answer = require('../dtos/answer-dto')
// const { convert } = require('xml-js')
const {js2xml} = require('xml-js')




class xkcdController{
    async xkcdGetIDS(req,res,next){

        const {ids} = req.body
        const arr = ids.split(','); // проверено, работает
        let data = {response:[]};
        for(const id of arr){
            // console.log(id)
            const {day, month, year, img} = await xkcdService.getData(id)  
            const rub_usd = await rubService.getDollar(day, month, year)
            console.log(rub_usd)
            var answer = new Answer(day, month, year,img, rub_usd)
            // console.log(day, month, year)
            data.response.push({xkcd: answer});
        }
        const options = {compact: true};
        const result = js2xml(data,options);
        // const result = js2xml(JSON.stringify(data, null, 2), options)
        console.log(result)
        return res.send(result)

        }
    }

module.exports = new xkcdController();