let express = require('express');
let app = express();

console.log("Hello World");

app.use(function middleware(req, res, next) {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    // Call the next function in line:
    next();
  });

// app.get("/", (req, res) => {
//     res.send("Hello Express");
//  });

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    res.sendFile(__dirname + "/views/index.html");
  });

app.get("/json", (req, res) => {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
            message: "hello json".toUpperCase()
        })
    } else {
        res.json({
            message: "hello json"
         })    
        }             
    });

























 module.exports = app;
