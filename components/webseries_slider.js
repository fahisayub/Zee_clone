
let webseriesslider=()=>{
    return `
    <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <!-- image1 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z587408/cover/1170x658withlogoa38382440a5f4a70913625b33df6b6e3d2bbf55903f84834b7f4371d3a348e3d.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Mithya</h1>
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
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-2264/cover/062264inlist.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Karkat Rogue </h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
      </div>
      </div>
      <!-- image4 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-1342/cover/1170x658withlogoe5995c92901049798385ec656388ec8d.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Sharate Aaj</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
      </div>
      </div>
      <!-- image5 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z571841/cover/1170x658withlogo00e24ab7d9f8467aa4007a143c2f12a1.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Mukti</h1>
          <div>
            <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
            <button id="plan">
              <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
            </button>
          </div>
      </div>
      </div>
      <!-- image6 -->
      <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-2901/cover/062901inlist.jpg"/>
        <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
        <div id="slide_tag" >
          <h1>Mafia</h1>
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
export {swiperfn,webseriesslider}