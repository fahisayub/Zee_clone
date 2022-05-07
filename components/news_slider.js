let newsslider=()=>{
    return `
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <!-- image1 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1480997069/cover/aajtak1170mobile89a40f9c653443ee91af7a50873ba5d4.jpg"/>
         
          <div id="slide_tag" >
            <h1>Stirred by getting 361 new corona patients in the form</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
           
            </div>
          </div>
        </div>
        <!-- image2 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-10z5117550/cover/indiatoday1170mobile177b6d02d0ca440abc073e9a47a1cc42.jpg"/>
          
          
          <div id="slide_tag" >
            <h1>Delhi hospital ready themselves for covid</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            
            </div>
        </div>
        </div>
        <!-- image3 -->
        <div class="swiper-slide"><img  src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1904997942/cover/wion1170mobile54fe48cc7bf7479a95746310494ea730.jpg"/>
         
          <div id="slide_tag" >
            <h1>Putin ready to provide safe passage for civilian</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            
            </div>
        </div>
        </div>
        <!-- image4 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1224347986/cover/newsx1170mobilee7827ea3862c4b8bb449168c182c8aa8.jpg"/>
         
          <div id="slide_tag" >
            <h1>PM Modi to hold meet on heatwave</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
             
            </div>
        </div>
        </div>
    
       
        </div>
        <!-- button -->
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
    `;
}






let swiperfn=()=>{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay:{
            delay:2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
export {swiperfn,newsslider}