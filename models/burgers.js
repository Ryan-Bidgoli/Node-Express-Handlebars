//requiring orm to access object in file
var orm = require("../config/orm");

//burger object that gets called in burger_controllers
 var burgers={
  selectAll:function(cb){
      orm.selectAll("burgers",function(data){
         cb(data)
      })
         
  },
  create:function(userData,cb){
    orm.create("burgers",userData,function(data){
      cb(data)
    })
  },
  update:function(id,devoured,cb){
    console.log("model id",id)
    orm.update("burgers",id,devoured,function(data){
        cb(data)
    })
  }

}
//exporting burger object for use in other files
module.exports = burgers
