
let x = document.getElementById("buyButen_Price")

function five(){
    console.log("599");
    document.getElementsByClassName("three").innerHTML=null;
    x.innerHTML="599";
}
function three(){
    console.log("399");
    document.getElementsByClassName("five").innerHTML=null;
    x.innerHTML="399";
}

//===========onclick popup==============


const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function(){
    modalWrapper.classList.add('active');
});

closeBtn.addEventListener('click', function(){
    modalWrapper.classList.remove('active');
});

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    modalWrapper.classList.remove('active');
});


//==================*************======================
