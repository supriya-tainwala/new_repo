

function myfunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";

    }
    else {
        x.type = "password";
    }


}

function validate() {
    var password = document.getElementById("pass")
    var Username = document.getElementById("user");
    if (password.value === "12345678" && Username.value == "admin") {
        alert("login is seccesfull");
        window.location.replace("addInvantory.html");
        return false;
    }
    else {
        alert("login failed")
    }
}


function loginpage() {
    window.location.replace("login.html");
}


