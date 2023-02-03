

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
        document.querySelector("#success").innerHTML="Login Successful"
        sessionStorage.setItem("key",1234)

        window.location.replace("addInvantory.html");
        return false;
    }
    else {
        document.querySelector("#warning").innerHTML="Login Fail"
    }
}


function loginpage() {
    window.location.replace("login.html");
}


