const express = require('express');
const app = express();
const users = require('./routes/users');
const debug = require("debug")("my-application");


app.use('/api/users', users);

app.listen(2020, (req, res) => {
    debug("服务器运行在2020端口")
});