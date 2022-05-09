let sorter = (value) =>{
    return document.createElement(value);
}

let getSorter = (val) => {
    return document.getElementById(val);
}

import Data from "../Components/moviesData.js";
console.log(Data);

//=================================

Data.forEach((el)=>{
    console.log(el);
    let container = getSorter("local"); //1st div is like container

    let divs = sorter("div");//2nd div image wala 
    divs.setAttribute("class","card")
    let image = sorter("img");
    image.src=el.img_url; 

    let div2 = sorter("div"); //3rd div for title
    div2.setAttribute("class","text")
   
    let title = sorter("h4"); 
    title.style.color='black';
    title.setAttribute("class","overlay")
    title.innerText=el.moviename;

   
    let content = sorter("div");    // 4th div for butten and all
    let butten = sorter("button");
    butten.setAttribute("class","blue_butten")
    butten.innerText="Watch";
    let more = sorter("p");
    more.setAttribute("class","more_blue")
    more.innerText="more...";


    content.append(butten,more);   
    div2.append(title,content)
    divs.append(image,div2)

    container.append(divs)

});

