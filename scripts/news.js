//navbar
import {features,navbar} from '../components/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('news');
//.........................................................//
//footer
import { footer } from '../components/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//.........................................................//
//slider
import { newsslider,swiperfn } from '../components/news_slider.js';
document.getElementById('swiper').innerHTML=newsslider();
swiperfn();
//...........................................................//
//jsslider
import {slideHtml,slidecontrol} from "../components/rawhtml.js";

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()
slidecontrol();
//..............................................................//
//newsslider
import { livenews_controll,livenews_slider } from '../components/livenews_slider.js';
document.getElementById('livenews').innerHTML=livenews_slider();
livenews_controll();
//............................................................//