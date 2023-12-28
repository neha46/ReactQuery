const { userCtrl, userLoginCtrl, getUserCtrl } = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router=require('express').Router();

// resgister user
router.post('/register',userCtrl)

// login user
router.post('/login',userLoginCtrl)

// getuser
router.get('/get-user',authMiddleware,getUserCtrl)
module.exports=router;