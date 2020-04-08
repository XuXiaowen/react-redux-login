const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({
        msg: 'Hello'
    })
})

app.listen(2020, (req, res) => {
    console.log("服务器运行在2020端口")
})