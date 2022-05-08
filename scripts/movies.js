//navbar
import {features,navbar} from '../components/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('movies');
//.........................................................//
//footer
import { footer } from '../components/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//.........................................................//
//slider
import { movieslider,swiperfn } from '../components/movie_slider.js';
document.getElementById('slider').innerHTML=movieslider();
swiperfn();
//.............................................................//
//jsslider
import {slideHtml,slidecontrol} from "../components/rawhtml.js";

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()
slidecontrol();
//............................................................//
//featured celibrities slider
import { celibrity_slider,celibfn } from '../components/celibrity_slider.js';
document.getElementById('f_celibrites').innerHTML=celibrity_slider();
celibfn();

