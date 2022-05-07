
let tvshowslider=()=>{
    return`
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <!-- image1 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1170x658withlogo2d7906e0cb5c43b5bf144cb568bef5d0.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          <div id="slide_tag" >
            <h1>Bhagya Lakshmi</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
              <button id="plan">
                <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
              </button>
            </div>
          </div>
        </div>
        <!-- image2 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3510/cover/1170x658withlogoeabf00861cf346728aadbb4cad5e3c9c.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          
          <div id="slide_tag" >
            <h1>Meet</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
              <button id="plan">
                <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
              </button>
            </div>
        </div>
        </div>
        <!-- image3 -->
        <div class="swiper-slide"><img  src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1170x658withlogo4d62118a4c304f069be8698476a45667.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          <div id="slide_tag" >
            <h1>Kundali Bhagya</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
              <button id="plan">
                <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
              </button>
            </div>
        </div>
        </div>
        <!-- image4 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z596031/cover/1170x658withlogo76a21e14d411400e83c710246134d51c.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          <div id="slide_tag" >
            <h1>Gauri Elo</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
              <button id="plan">
                <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
              </button>
            </div>
        </div>
        </div>
        <!-- image5 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3121/cover/1170x658withlogoc21d2c9b194b4b969cbff826ab83b7ab.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          <div id="slide_tag" >
            <h1>Mithai</h1>
            <div>
              <button id="watch"><a href="#"><i class="fa-solid fa-play"></i></a>WATCH</button>
              <button id="plan">
                <a href="#"><i class="fa-solid fa-crown"></i></a>BUY PLAN
              </button>
            </div>
        </div>
        </div>
        <!-- image6 -->
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
        <!-- image7 -->
        <div class="swiper-slide"><img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3493/cover/1170x658withlogo2c7cfbb58ed340cdbcdca03ac71c406d.jpg"/>
          <div class="crown"><a href="#"><i class="fa-solid fa-crown"></i></a></div>
          <div id="slide_tag" >
            <h1>Uma</h1>
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
export {swiperfn,tvshowslider}