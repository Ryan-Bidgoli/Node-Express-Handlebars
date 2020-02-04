var express = require("express")
var app = express()

//deploying to heroku or my computer
var PORT = process.env.PORT || 8080

var exphbs = require("express-handlebars")
//main is default layout receives html tag from the all the handlebars
app.engine("handlebars",exphbs({defaultLayout: "main"}))
app.set("view engine","handlebars")

//middleware to translate user input into json so server can repeat it
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// imports the controller into the server
var burger_controller = require("./controllers/burger_controller")

burger_controller(app)

//does git request for public folder as a route(url) path, http://localhost:8080/assets
app.use(express.static("public"))


app.listen(PORT,function(){
    console.log("app is listening http://localhost:"+PORT)
})