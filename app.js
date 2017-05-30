/**
 * Created by sergiodiazpinilla on 28/05/17.
 */
const express = require('express')
var path    = require("path");
const app = express()

app.get('/', function (req, res) {
    console.log("HOLA")
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})