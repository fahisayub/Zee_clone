let celibrity_slider=()=>{
    return`
    <div class="featured">
        <div class="container-B">
          <div class="top_heading-B">
              <h2>Featured Celebs</h2>
              <a href="../pages/celibritypage.html">More <i class="fa-solid fa-angle-right"></i></a>
          </div>
          
        
          <div class="card_container-B">
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-2726/square/amitabhbacchan1943871325.jpg" >
              <p>Abhitabh Bachchan</p> 
          </div>

          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6488/square/salmankhan_1170x658revised.jpg" >
              <p>Salman khan</p> 
          </div>

          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6489/square/akshaykumar_1170_548546104.jpg" >
              <p>Akshay Kumar</p> 
          </div>

          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-7523/square/platformcretaiv_1631276378.jpg" >
              <p>Ranbir Kapoor</p> 
          </div>

          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-7217/square/pankajtripathi.jpg" >
              <p>Pankaj Tripathi</p> 
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-1845/square/madhuridixit.jpg" >
              <p>Madhuri Dixit</p>   
          </div>

          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-8267/square/vikrantmasseyplatformcreta.jpg" >
              <p>Vikrant Massay</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6255/square/naseeruddinshah.jpg" >
              <p>Naseeruddin Shah</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-7543/square/platformcretaiv_1939464224.jpg" >
              <p>Manoj Bajpayee</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6023/square/rajkummarrao.jpg" >
              <p>Rajkumar Rao</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-8678/square/platformcretaive_901722262.jpg" >
              <p>Shah Rukh Khan</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-2251/square/priyankachopra__1675146952.jpg" >
              <p>Priyanka Chopra</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-4969/square/platformcretaivesforcelebs.jpg" >
              <p>Irrfan khan</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-2901/square/platform_celebs_03_1170x65.jpg" >
              <p>Vicky Kaushal</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-2240/square/katrinakaif_117_1691002625.jpg" >
              <p>Katrina Kaif</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-8672/square/platformcretaive_331163409.jpg" >
              <p>Tapsee Pannu</p>   
          </div>
          
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-7827/square/platformcretaiv_1895485370.jpg" >
              <p>Sushant Singh Rajput</p>   
          </div>
          <div class="card-B">
            <img src="https://akamaividz2.zee5.com/image/upload/w_125,h_125,c_scale,f_webp,q_auto:eco/resources/0-8-6040/square/sonusood_1068068506.jpg" >
              <p>Sonu Sood</p>   
          </div>
        </div>
          
       
          <!-- <a class="pre1" >&#10094;</a> -->
          <div class="next2-B" >&#10095;</div>
          
      </div>
      </div>
    `
};
let celibfn=()=>{
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
}

export {celibrity_slider,celibfn};