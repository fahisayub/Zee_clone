let id;

let myfunc = () =>{
    clearTimeout(id);

    id = setTimeout(()=>{
        alert("Payment Success")
    },1000)

    id= setTimeout(()=>{
        alert("Enjoy your video")
    },4000)

    id = setTimeout(()=>{
        window.location.href="../index.html"
    },6000)
}





