//navbar
import {features,navbar} from '../components/nav.js'
document.querySelector('#navbar').innerHTML=navbar();
features();
// .................................................//


let {imgurl,moviename}=JSON.parse(localStorage.getItem('tvshow'));
let poster=document.getElementById('poster');
poster.style.backgroundImage=`url(${imgurl})`
document.getElementById('moviename').innerText=moviename;

