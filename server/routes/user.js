const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.query, 'req.query')
    res.send('user get');
});

router.post("/",(req,res) =>{
    console.log(req.body, 'req.body')
    res.send('user post');
})

module.exports = router;