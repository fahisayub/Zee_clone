// var celebraties = [
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-2726/square/amitabhbacchan1943871325.jpg",
//         title: "Abhitabh Bachchan",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6488/square/salmankhan_1170x658revised.jpg",
//         title: "Salman khan",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6489/square/akshaykumar_1170_548546104.jpg",
//         title: "Akshay Kumar",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-7523/square/platformcretaiv_1631276378.jpg",
//         title: "Ranbir Kapoor",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-7217/square/pankajtripathi.jpg",
//         title: "Pankaj Tripathi",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-1845/square/madhuridixit.jpg",
//         title: "Madhuri Dixit",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-8267/square/vikrantmasseyplatformcreta.jpg",
//         title: "Vikrant Massay",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6255/square/naseeruddinshah.jpg",
//         title: "Naseeruddin Shah",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-7543/square/platformcretaiv_1939464224.jpg",
//         title: "Manoj Bajpayee",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6023/square/rajkummarrao.jpg",
//         title: "Rajkumar Rao",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-2251/square/priyankachopra__1675146952.jpg",
//         title: "Priyanka Chopra",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-4969/square/platformcretaivesforcelebs.jpg",
//         title: "Irrfan khan",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-2901/square/platform_celebs_03_1170x65.jpg",
//         title: "Vicky Kaushal",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-8678/square/platformcretaive_901722262.jpg",
//         title: "Shah Rukh Khan",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-2240/square/katrinakaif_117_1691002625.jpg",
//         title: "Katrina Kaif",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-8672/square/platformcretaive_331163409.jpg",
//         title: "Tapsee Pannu",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-8268/square/kritikharbandaplatformcret.jpg",
//         title: "Kriti Kharbhanda",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-7827/square/platformcretaiv_1895485370.jpg",
//         title: "Sushant Singh Rajput",
//     },
//     {
//         img: "https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6040/square/sonusood_1068068506.jpg",
//         title: "Sonu Sood",
//     },

// ]





var  arrows = document.querySelectorAll(".next2-B");
var  movieLists = document.querySelectorAll(".card_container-B");
//var  movieLists = document.querySelectorAll("#anjali");



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

  
// // console.log( Math.floor(window.innerWidth/240))
 });
