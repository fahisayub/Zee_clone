let homeslider=()=>{
    return`<div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <!-- image1 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z588913/cover/1170x658withlogoc9ef5446a11e47b1a675d342dfbd2a3f.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Tonic</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
        </div>
      </div>
      <!-- image2 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-1298/cover/1170x658withlogoa0f9e6232dbb4374ae52b88d64d9a4c6.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        
        <div id="slide_tag" >
          <h1>Abhay</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
      </div>
      </div>
      <div class="swiper-slide"><img  src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-2356/cover/1170x658withlogo40e0dfba38b343eaa8dcbcd0f5b8616d.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Never Kiss your Bestfriend</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
      </div>
      </div>
      <!-- image3 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5126300/cover/1170x658withlogo42e3d4f078404f5db73555bc50df20d4.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Binay Badal Dinesh</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
      </div>
      </div>
      <!-- image4 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-101-10z5137854/cover/1170x6587dad82495d5b4f528baeec4966599809.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Spider Man : No Way Home</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
      </div>
      </div>
      <!-- image5 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-127/cover/1170x658withlogoafd07c82150a4b14a2735a2ba5b3efb7.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Kumkum Bhagya</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
      </div>
      </div>
      <!-- image6 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5107910/cover/1170x658withlogo553201d92d324f39ad8ecc736bfd70de.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Aami Joy Chatterjee</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
      </div>
      </div>
      <!-- button -->
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>`;
};
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

export{homeslider,swiperfn};