// $("#click").click(()=>
// {
//     // $(".Box").hide(5000)
//     // $(".Box").slideToggle(1000)
//     $(".top").animate({width:"100%"},1000)

// }
// )

// $("#stop").click(()=>
// {
//  $(".top").stop()

// }
// )
 // show profile photo
// $.get({

//     url:"https://jsonplaceholder.typicode.com/users",
//     success:function(res){
//    $("#list").html(`<li>${res[0].name}</li>`)
//     }

// $.get({
//     url:"https://api.github.com/users/shrooqalsaadi",
//     success:function(res){
//         $("#list").html("<img src='"+res.avatar_url+"'>")
//     }
// })

//show profile photo for user
$("#click").click(()=>{
    let username=$("#username").val()
    let urlapi="https://api.github.com/users/"+username
    $.get({
        url:urlapi,
        success:function(res){
            $("#img").attr("src",res.avatar_url)
            console.log(res.avatar_url)
        }
    })
})