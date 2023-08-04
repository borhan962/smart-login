let signUpName = document.getElementById("signUpName")
let signUpEmail = document.getElementById("signUpEmail")
let signUpPassword = document.getElementById("signUpPassword")
let data
let userData
let signinEmail = document.getElementById("signinEmail")
let signinPassword = document.getElementById("signinPassword")
let welcomeName = document.getElementById("welcomeName")

if (localStorage.getItem("userData") != null )  {
    data = JSON.parse(localStorage.getItem("userData"))
    welcomeName.innerHTML= `${data.name}`
}


function signUp() {
     userData = {
        name: signUpName.value ,
        email: signUpEmail.value ,
        password: signUpPassword.value,
    }
    checkSignup("index.html")
}

function login() {
    if (localStorage.getItem("userData") == null) {
        alert("please sign up first ):")
    }else{
         data = JSON.parse(localStorage.getItem("userData"))
         if (signinEmail.value == data.email  && signinPassword.value == data.password ) {
           location.href = "home.html"
        }else{
            document.getElementById("incorrect").innerText = "email or password is incorrect"
        }
    }

}

function checkSignup(url) {

    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "" ) {
        document.getElementById("exiest").innerText = " please fill all inputs"
    }else{
        localStorage.setItem("userData", JSON.stringify(userData))
    }
        if (signUpEmail.value == data.email) {
            document.getElementById("exiest").innerText = " this email already exiest"
        }else{
            localStorage.setItem("userData", JSON.stringify(userData))
            window.location=`${url}`;
        }
        clearForm()
    }


    function clearForm() {
  signUpEmail.value = ''
  signUpName.value = ''
  signUpPassword.value = ''
}
    
