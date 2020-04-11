const express = require('express');
const router = express.Router();

const isEmpty = require('lodash/isEmpty')
const validator = require('validator')

const validatorInput = (data) => {
    let errors = {};
    if(!validator.isLength(data.username, {min: 2, max: 30})){ 
        errors.username = '名字长度不能小于2或超过30位'
    }
    if(!validator.isEmail(data.email)) {
        error.email = '邮箱不合法'
    }
    if(!validator.isLength(data.password, {min: 8})){ 
        errors.name = '密码长度不能小于8位'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.get('/', (req, res) => {
    console.log(req.query, 'req.query')
});

router.post("/",(req,res) =>{
    console.log(req.body, 'req.body')
    const { errors, isValid } = validatorInput(req.body);
    if(!isValid) {
        res.status(400).json(errors);
    }
})

module.exports = router;