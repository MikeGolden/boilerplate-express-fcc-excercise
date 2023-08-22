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
    res.sendFile(__dirname + "/views/index.html");
  });

app.get("/json", (req, res) => {
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

const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};
      
app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});

 module.exports = app;
