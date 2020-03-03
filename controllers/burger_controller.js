//Setting up dependency for file
var burgers = require("../models/burgers")
function burger_controller(app){
   //app.get will use the selectAll functions set up on orm.js and burgers.js
   //access database to display all the burgers in the burger table
    app.get("/",function(req,res){
       burgers.selectAll(function(data){
           console.log(data)

           res.render("index",{burgers:data})
       })
       
    })
    //app.post will update functions set up in orm.js and burger.js 
    app.post("/api/burgers", function(req,res){
        console.log(req.body)
        burgers.create(req.body,function(data){
                 console.log(data)
             res.render("index",{burgers:data})
        })
    })
   //app.put will use the update functions set up in orm.js and burger.js 
   app.put("/api/burgers/:id", function(req,res){
         var id = req.params.id
         var devoured = req.body.devoured
         console.log("id: "+id)
          burgers.update(id,devoured,function(data){
             res.json(req.body)
          })
   })

 }
 
 module.exports = burger_controller
