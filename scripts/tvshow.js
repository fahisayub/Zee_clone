//navbar
import {features,navbar} from '../components/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('tvshow');
//.........................................................//
//footer
import { footer } from '../components/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//.........................................................//
//slider
import { tvshowslider,swiperfn } from '../components/tvshow_slider.js';
document.getElementById('swiper').innerHTML=tvshowslider();
swiperfn();