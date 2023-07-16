//document.getElementById("show").onclick=function()
//{
    //document.getElementById("Password").type="Text"
//}

// let Password = document.getElementById("password")
// document.getElementById("show").onclick=function()
// {
//     if(Password.type === "password")
//     {
//         document.getElementById("show").innerText = "hide"
//         Password.type = "text"

//     }
//     else
//     {
//         document.getElementById("show").innerText = "show"
//         Password.type = "password"
  
//     }
// }

// show password

$('#show').click(function(){

    if ($("#password").attr("type")=== "password")
    {
        $('#show').text("hide")
        $('#password').attr("type","text")
    }

else
{
    $('#show').text("show")
    $('#password').attr("type","password")
}
})


// count letter

$('#textarea').on('input',function(){
    var charCount=$(this).val().length;
    $('#charCount').text(charCount);

    if(charCount>=20)
    {
        $(this).css('border-color','red')
        $(this).css('outline-color','red')
    }
    else
    {
        $(this).css('border-color','black')
        $(this).css('outline-color','black')
    }


})

