
let navbar=()=>{
    return `
    <ul id="lnav">
            <a href=""><img id="navlogo" src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.46" alt=""></a>


            <li><a class="h_onhover" id="home" href="../index.html">Home</a></li>
            <li class="dropdown"><a class="h_onhover " href="../pages/tvShows.html">TV Shows</a>
                <div class="dropdown-content">
                    <div class="filter1">
                        <a id="Top Hindi" href="#">Top Hindi Shows</a>
                        <a id="Top Marati" href="#">Top Marati Shows</a>
                        <a id="Top Malayalam" href="#">Top Malayalam Shows</a>
                        <a id="Must Watch" href="#">Must Hindi Shows</a>
                    </div>
                    <div class="drop_tv_shows">

                    </div>

                </div>
            </li>
            <li class="dropdown"><a id="movies" class="h_onhover " href="../pages/movies.html">Movies</a>
                <div class="dropdown-content">
                    <div class="filter2">
                        <a id="Top Hindi" href="#">Exclusive Movies on ZEE5</a>
                        <a id="Top Marati" href="#">500+ Free Movies</a>
                        <a id="Top Malayalam" href="#">Popular Movies on ZEE5</a>
                        <a id="Must Watch" href="#">Top ZEE5 Movies in Marati </a>
                    </div>
                    <div class="drop_movies">

                    </div>

                </div>
            </li>
            <li><a class="h_onhover" id="webseries" href="../pages/webseries.html">Web Series</a></li>
            <li class="dropdown"><a class="h_onhover " id="news" href="../pages/news.html">News</a>
                <div class="dropdown-content">
                    <div class="filter3">
                        <a id="Top Hindi" href="#">Live News Channels- Free</a>
                        <a id="Top Marati" href="#">Headline of The Day</a>
                        <a id="Top Malayalam" href="#">World of Showbiz</a>
                        <a id="Must Watch" href="#">Around The Globe</a>
                    </div>
                    <div class="drop_news"></div>
                </div>
            </li>
            <li class="dropdown"><a href=""><span id="hn_more" class="material-symbols-outlined"> apps</span></a>
                <div id="drop_ops" class="dropdown-content">
                    <div id="hnmore_ops">
                    </div>
                </div>
            </li>
        </ul>
        <div id="rnav">
            <div id="search">
                <span class="material-symbols-outlined"> search </span>
                <input type="text" id="query" placeholder="Search for Movies, Channels, Shows etc. ">
                <span class="material-symbols-outlined"> mic</span>

            </div>
            <div id="htr_icon">
                <span class="material-symbols-outlined">
                    translate
                </span>
            </div>
            <div>
                <button id="hlogin_btn">LOGIN</button>
            </div>
            <div>
                <button id="hplan_btn"><i class="fa-solid fa-crown"></i> BUY PLAN</button>
            </div>
            <div id="hmenu"><span class="material-symbols-outlined">
                    menu
                </span></div>
        </div>
    `;
}



let navtvshow = (data, id, appendto) => {

    let droptv = document.querySelector(appendto);
    droptv.innerHTML = null;
    data.forEach(({ img_url,limg, moviename, cat }) => {
        let div = document.createElement('div');
        div.style.backgroundImage = `url(${img_url})`;

        div.addEventListener('click', () => {
            if (appendto == '.drop_tv_shows') {
                let show={
                    imgurl:limg,
                    moviename:moviename,

                }
                 localStorage.setItem('tvshow',JSON.stringify(show));
                window.location.href = '../pages/tvshow_intropage.html'
            }

        });

        if (id == cat) {
            droptv.append(div);
        }


    })
}
// let gettab=()=>{
//     let tabs=document.querySelector('.h_onhover').id;
//     console.log(tabs);
// }
// gettab();

let getfilter = (filterno, appendto) => {
    let moviedata = JSON.parse(localStorage.getItem('moviehover'));
    let filter = document.querySelector(filterno).children;
    navtvshow(moviedata, 'Top Hindi', appendto);
    for (let el of filter) {
        let id = el.id;
        el.addEventListener('click', () => { navtvshow(moviedata, id, appendto) })
    }

}
let showops = () => {
    let data = [{ name: 'Eduauraa' }, { name: 'Pemium' },
    { name: 'Live TV' }, { name: 'Music' }, { name: 'ZEEPLEX' },
    { name: 'Play' }, { name: 'Articles' }, { name: 'Kids' },
    { name: 'Videos' }, { name: 'Stories' }, { name: 'Channels' }];
    data.forEach(({ name }) => {
        let option = document.createElement('a');
        option.innerText = name;
        document.getElementById('hnmore_ops').append(option);
    })
}

let features=()=>{
showops();
getfilter('.filter1','.drop_tv_shows');
getfilter('.filter2','.drop_movies');
getfilter('.filter3','.drop_news');

}

export { navtvshow,features,navbar }