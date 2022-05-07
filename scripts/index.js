//navbar
import {features,navbar} from '../components/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features('home');
//............................................//
//footer
import { footer } from '../components/footer.js';
document.querySelector('#footer_top').innerHTML=footer();
//.................................................//

//swiper
import { homeslider,swiperfn } from '../components/homeslider.js';
document.getElementById('swiper').innerHTML=homeslider();
swiperfn();
