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