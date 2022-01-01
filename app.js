const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");


app.get('/',(req, res) => {
    res.render("index");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is set on 3000!");
});