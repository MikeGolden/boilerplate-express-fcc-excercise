require('dotenv').config();

let express = require('express');
let app = express();

console.log("Hello World");

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
    res.json({
        if (process.env.MESSAGE_STYLE === "uppercase") {
            response = "Hello World".toUpperCase();
          } else {
            response = "Hello World";
          }
    });
});
























 module.exports = app;
