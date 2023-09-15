const global={
    currentPage:window.location.pathname
}


async function displayPopularMovies(){
  const {results}= await fetchAPIData("movie/popular");
  results.forEach((movie)=>{
    const movieCard=document.createElement("div");
    movieCard.classList.add("card")
    movieCard.innerHTML= `
   <a href="movie-details.html?id=${movie.id}">
   ${movie.poster_path?` <img
   src="https://image.tmbd.org/t/p/w500${movie.poster_path}"
   class="card-img-top"
   alt="${movie.title}"
 />` : ` <img
 src="images/no-image.jpg"
 class="card-img-top"
 alt="${movie.title}"
/>`}
   </a>
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">
      <small class="text-muted">Release: ${movie.release_date}</small>
    </p>
    </div>
   `;
   document.querySelector("#popular-movies").appendChild(movieCard)
  }) ;
}

//Fetch data from TMDB api
async function fetchAPIData(endpoint){
const API_KEY="f33c372d03fa3e9a5482dd1a2eebf657";
const API_URL="https://api.themoviedb.org/3/";
const res= await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
const data = await res.json();
return data;
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
       displayPopularMovies();
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