const passwordInput = document.querySelector("#password_data");

passwordInput.addEventListener("keyup", () => {
    let password = passwordInput.value;
    
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");

    if(password.length===0)
    {
        document.querySelector(".safety").innerHTML = "Enter Password";
    }
    else
    {
        document.querySelector(".safety").innerHTML = '<span>Password Strength</span><span class="line" id="line1"></span><span class="line" id="line2"></span><span class="line" id="line3"></span>';
    }

    if (strongRegex.test(password)) 
    {
        document.querySelector("#line1").style.background = "green";
        document.querySelector("#line2").style.background = "green";
        document.querySelector("#line3").style.background = "green";
    } 
    else if (mediumRegex.test(password)) 
    {
        document.querySelector("#line1").style.background = "yellow";
        document.querySelector("#line2").style.background = "yellow";
    } 
    else 
    {
        document.querySelector("#line1").style.background = "red";
        
    }
})

let createBtn = document.querySelector("#createBtn")
createBtn.addEventListener("click", e => {
    e.preventDefault()
    let inputs = document.querySelectorAll("input")
    for( i=0; i<inputs.length; i++ ){
        if(inputs[i].value == "" || inputs[i].value == undefined || inputs[i].value.length == 0){
            window.alert("Please fill the form completely!")
            break
            return false
        }
    }

    const req = new XMLHttpRequest()
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 && this.responeText != ""){
            if( this.responseText.localeCompare("Success") != 1 ){
                window.alert("Thank you "+inputs[0].value+" for Registering !")
                document.location = window.location.href
            } else {
                console.log(this.responseText)
            }
        }
    }
    req.open("POST", "register.php", async=true)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send("name="+inputs[0].value+"&email="+inputs[1].value+"&paswd="+btoa(inputs[2].value))
})