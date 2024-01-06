const Router = require('express').Router;
// const userController = require('../controllers/user-controller');
const xkcdController = require('../controllers/xkcdController');
// const companyController = require('../controllers/company-controller');
// const studentController = require('../controllers/student-controller');
const router = new Router();
// const {body} = require('express-validator');

router.post('/xkcd',
    // body('email').isEmail(),
    // body('password').isLength({min: 3, max: 32}),
    xkcdController.xkcdGetIDS
);
// router.post('/login', userController.login);
// router.post('/logout', userController.logout);
// router.post('/company-registration', authMiddleware, companyController.registraition);
// router.post('/student-registraition', authMiddleware, studentController.registraition);
// router.get('/activate/:link', userController.activate);
// //router.post('/password-update', userController.password_update);
// //router.get('/passu/:link', userController.passu);
// router.get('/refresh', userController.refresh);
// router.get('/users', authMiddleware, userController.getUsers);
// router.get('/test', userController.test);


module.exports = router