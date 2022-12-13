

function check(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if(email === "pakistan321@gmail.com" && pass === "12345")
    {
         loadSheet();
    }
    else
    {
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
    }
}
function loadSheet(){
    window.location = "attendancePage2.HTML"
}

