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
//........................................................//
//jsslider
import {slideHtml,slidecontrol} from "../components/rawhtml.js";

let h = document.getElementById("jsSlide")
h.innerHTML = slideHtml()
slidecontrol();

/////// ........................ Zee Plex Card ........................ ////////

import { zeeplexappendfn,zeep } from "../components/zeePlex.js"

let main = document.getElementById("zeeplex")
main.innerHTML = zeep();
zeeplexappendfn(main);





