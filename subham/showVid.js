import {slideHtml} from "./rawhtml.js"

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()

// ---------------------slide video-------------


var  arrows = document.querySelectorAll(".next2");
var  movieLists = document.querySelectorAll(".card_container");

// console.log(arrows)

arrows.forEach((elem, i) => {

    i
    
    var itemNumber = movieLists[i].querySelectorAll("img").length;
    var clickCounter = 0;
    if (window.length > 400) {
    
    }
    elem.addEventListener("click", function () {

    const ratio = Math.ceil(window.innerWidth / 220);
    clickCounter++;

    if (itemNumber - (5 + clickCounter)+(5-ratio) >= 0) {
        movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value -260
        }px)`;
    } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
    }
    });
// console.log( Math.floor(window.innerWidth/240))
});


/////// ........................ Zee Plex Card ........................ ////////

import { zeePlexObj,zeep } from "./zeePlex.js";

// console.log(zeePlexObj[2])

let main = document.getElementById("zeeplex")
main.innerHTML = zeep()



let Super = document.createElement("div")
Super.setAttribute("class","super")


zeePlexObj.forEach((ele)=>{
    // console.log(ele)

    let box = document.createElement("div")
    box.setAttribute("class","dbox")
    box.addEventListener("click",()=>{
        zeePlexPage()
    })

    let image = document.createElement("img")
    image.src= ele.image

    let box1 = document.createElement("div")
    box1.setAttribute("class", "ptex")

    let part1 = document.createElement("div")
    let title = document.createElement("h2")
    title.innerText = ele.title

    let des = document.createElement("p")
    des.innerText = ele.des
    part1.append(title,des)

    let part2 = document.createElement("div")
    let logo = document.createElement("img")
    logo.src = "https://www.zee5.com/images/zee-plex-logo.png"

    box1.append(part1,logo)

    box.append(image,box1)
    Super.append(box)
    main.append(Super)
})

const zeePlexPage = () =>{
    window.location.href = "zeepage.html"
}


