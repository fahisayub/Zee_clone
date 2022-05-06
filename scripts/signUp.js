

let signUpFun = (event) => {
    event.preventDefault();    
     
    let form_data = {
        email:document.getElementById("inputText").value,
        // otp:Math.floor(Math.random()*10000)
    }   
    
    if(form_data.email.length>20){
        alert("Please fill data less than 20 character")
    }else if(form_data.email.length<1){        
        alert("Please fill your valid email or mobile number")
    }else{
        // alert("Now you have to fill ")
        localStorage.setItem("credits",JSON.stringify(form_data));
        window.location.href="../pages/login.html"
    }

}








