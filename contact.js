let inputs = document.querySelectorAll("input")
document.querySelector(".btn").addEventListener("click", e => {
	let msg = document.getElementsByClassName("field")[3].value
	e.preventDefault();
	for( i=0; i<inputs.length; i++ ){
		var message = (inputs[i].value == "" || inputs[i].value == undefined || inputs[i].value.length == 0 || msg == "" || msg.length == 0 || msg == undefined) ? "empty" : ""
	}
	if(message.localeCompare("empty")==0){
		window.alert("Please fill all fields !")
		return false
	}else{
		const req = new XMLHttpRequest()
    	req.onreadystatechange = function(){
        	if(this.readyState == 4 && this.status == 200 && this.responeText != ""){
            	if( this.responseText.localeCompare("Success") != 1 ){
                	window.alert("Thank you "+inputs[0].value+" for contacting us !")
                	document.location = window.location.href
            	} else {
                	console.log("Error Occured !"+this.responseText)
                	window.alert("An error occured !")
                	return false
            	}
        	}
    	}
    	req.open("POST", "contact.php", async=true)
    	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    	req.send("name="+inputs[0].value+"&mail="+inputs[1].value+"&phone="+inputs[2].value+"&msg="+msg)
	}
})