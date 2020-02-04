var connection = require("./connection")


var orm = {
    selectAll: function(tableName, cb){
          connection.query("select * from ?? ",tableName,function(error,data){
                cb (data)  
          })
        
    },
    create:function(tableName,userData,cb){
        var devoured = userData.devoured === "true"
       var statement= connection.query("insert into "+tableName+" (burger_name,devoured)values(?,?)",
        [userData.burger_name, devoured]
        ,function(error,data){
            cb(data)
        })
        console.log(statement.sql)
    },
    update:function(tablename,id,devoured,cb){
        console.log("orm id: ",id)
        var devoured = devoured === "true"
      var statement =  connection.query("update ?? set devoured = ? where id = ?",
        [tablename,devoured,id],function(error,data){
            cb(data)
        })
        console.log(statement.sql)
    }

}


module.exports = orm
