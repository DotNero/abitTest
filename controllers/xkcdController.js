const xkcdService = require('../service/xkcdService')
const {validationResult} = require('express-validator');

class xkcdController{
    async xkcdGetIDS(req,res,next){
        const IDS = req.body().split(',');
        let data = [];
        IDS.forEach((id) => {
            data.append(xkcdService.getData(id))
        })
        
    }
}