var express = require('express');
var app = express();
// template engine
app.set("view engine", "ejs");
// module multer
var multer = require('multer');
var server = require("http").createServer(app);
server.listen(3000, function () {
    console.log('connect ok');
})

// path upload
var storage = multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage});

app.get('/upload', function( req, res) {
    res.render('form_upload');
})

app.post("/upload", upload.single('file') , function(req, res) {
    console.log(req.file);
    res.send("upload file thanh cong");
})