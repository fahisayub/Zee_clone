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
document.getElementById('slider').innerHTML=homeslider();
swiperfn();
//.......................................................//
//learn
import { learn_slider,learnfn } from '../components/learn_slider.js';
document.getElementById('learn').innerHTML=learn_slider();
learnfn();
