let movieslider=()=>{
    return`
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <!-- image1 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/cover/1170x658withlogo53bc7b3413e44a1bbcc3cf8476880513.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          <div id="slide_tag" >
            <h1>The Kashmir Files</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
              <button id="plan">
                <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
              </button>
            </div>
          </div>
        </div>
        <!-- image2 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5117565/cover/1170x658withlogo6bc94ccb45f24eb68a524599b311fd28.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          
          <div id="slide_tag" >
            <h1>Valimai (Hindi)</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
              <button id="plan">
                <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
              </button>
            </div>
        </div>
        </div>
        <div class="swiper-slide"><img  src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z595840/cover/1170x658withlogof46f21943471432e97c8a751e182e158.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          <div id="slide_tag" >
            <h1>Love Hostel</h1>
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
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5127658/cover/1170x658withlogo8147f3d6aa394921a0117bc474c5b8a5.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          <div id="slide_tag" >
            <h1>Mai Viyah Nhi Karona Tere Naal</h1>
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
    </div>
    `
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
export {movieslider,swiperfn};