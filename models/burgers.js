var orm = require("../config/orm");


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

module.exports = burgers