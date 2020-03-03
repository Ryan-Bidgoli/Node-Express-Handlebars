// Add Burger to Database Button
$("#addBtn").on("click",function(){

    var getBurgerName = $("#burgerTxt").val()

    var userData = {
        burger_name : getBurgerName,
        devoured : false
    }
alert("collect")
    $.ajax({
        url:"api/burgers",
        method:"Post",
        data: userData
    }).then(function(data){
        location.reload()
    })
}) 

$("#devouredBtn").on("click", function(){
     var id = $(this).attr("data-id")
console.log(id)
     var userData = {
         devoured: true
     }

     $.ajax({
         url:"api/burgers/"+id,
         method:"PUT",
         data: userData

     }).then(function(data){
        // console.log("devoured: ",data)
        location.reload()
     })


})
