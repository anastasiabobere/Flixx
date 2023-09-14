const global={
    currentPage:window.location.pathname
}

console.log(global.currentPage);
//highlight active link
function highlightActiveLink(){

    const links=document.querySelectorAll(".nav-link");
   links.forEach((link)=>{
    if(link.getAttribute("href")===global.currentPage){
         link.classList.add("active")
    }
   })
}

//init app
function init(){
    switch(global.currentPage){
      case "/":
      case"/index.html":
        console.log("Home");
        break;
        case "/shows.html":
            console.log("SHows");
            break;
            case"/movie-details.html":
            console.log("Movie Details");
            break;
            case"/tv-details.html":
            console.log("TV Details");
            break;
            case"/search.html":
            console.log("Search");
            break;

       default:
      console.log("NOT HOME")
    };
    highlightActiveLink();
}
document.addEventListener("DOMContentLoaded",init)