var express = require("express");
// goi app = modul express
var app = express();
// tao server tu app
var server = require("http").createServer(app);

// server lang nghe port 3000
server.listen(3000);

app.get("/", function (req, res) {
    //res.send("<div>Hello word</div>"); // tra ve 1 chuoi
    res.sendFile(__dirname + '/index.html'); // tra ve 1 file
});

app.get("/gioi-thieu.html", function(req, res) {
    res.send('this is gioi_thieu.html');
});

app.get("/tinhtong/:so1/:so2", function (req, res) {
    //res.send("<div>Hello word</div>"); // tra ve 1 chuoi
    //res.sendFile(__dirname + '/index.html'); // tra ve 1 file
    var a = req.params.so1;
    a = parseInt(a);
    var b = req.params.so2;
    b = parseInt(b);
    var tong = a + b;
    res.send('<h1>Ket Qua: ' + a + '+ '+  b + ' = ' + tong + ' </h1>');
});

// post & get
app.get('/hello', function(req, res) {
    res.send('Getting HuyTuan');
})
app.post('/hello', function(req, res) {
    res.send('Posting HuyTuan');
})

app.get('/tintuc/:id', function (req, res) {
    var id = req.params.id;
    res.send('Server nhan dc id: ' + id);
})

// body-parser , get data tu post
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended:false})
app.post('/login', urlencodedParser, function(req, res) {
    var user = req.body.username;
    var pass = req.body.password;
    res.send("user:" + user + " password: " + pass);
})

// EJS , template engin
// cau hinh ejs
app.set("view engine", "ejs");
// khai bao thu muc

app.get("/huytuan", function(req, res) {
    res.render("home"); // call views/home.ejs
})

// truyen tham so, bien cho teamplate EJS
app.get("/detail", function(req, res) {
    var data = {
        name : "Tuan",
        age  : "30",
        email : "tuanvh@gmail.com"
    }
    res.render("detail", data);
})
// truyen mang
app.get("/detail2", function(req, res) {
    var namsinh = [
        1989,2000,2001,2002
    ]
    res.render("detail2", { arrNamSinh: namsinh });
})