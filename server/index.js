const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const debug = require("debug")("my-application");

const userRouter = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/users', userRouter);

app.listen(2020, (req, res) => {
    debug("服务器运行在2020端口")
});