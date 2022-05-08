
let getData=async(url)=>{
    try{
        let res=await fetch(url);
        let data=await res.json();
       let video=data.items;
       console.log(video);

       localStorage.setItem('sresult',JSON.stringify(video));
       return video;
    
    }catch(err){
        console.log(err);
    }
}
let create=tag=>{
    return document.createElement(tag);
}
let append=(data)=>{

    let display=document.getElementById('result');
    display.innerHTML=null;
    data.forEach(({id:{videoId},snippet:{thumbnails:{medium:{url}},title}})=>{
        let div=create('div');
        div.style.backgroundImage = `url(${url})`;
        div.setAttribute('class','movie');
        let titlebox=create('div');
      titlebox.setAttribute('class','titlebox');
        titlebox.innerText=title;
        div.append(titlebox);
        display.append(div);
        data={
            id:{videoId},snippet:title}
        
        div.onclick=()=>{
            
            showVid(data);
        };
    
    });
    const showVid=(x)=>{
        localStorage.setItem('video',JSON.stringify(x));
        window.location.href='../pages/youtube.html';
    
    }
    
     }
     
     export {getData,append};






