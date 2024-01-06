const Router = require('express').Router;
const xkcdController = require('../controllers/xkcdController');
const router = new Router();

router.post('/xkcd',xkcdController.xkcdGetIDS);



module.exports = router