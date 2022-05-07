

let data = JSON.parse(localStorage.getItem("credits"));

let loginFun = (event) => {
    event.preventDefault();
    let crediential = document.getElementById("inputText").value;    
    console.log(crediential);

    if(crediential===data.email){
        alert("Login Success :-)")
        window.location.href="../index.html";
    }else{
        alert("Fill corect details.")
    }
}










