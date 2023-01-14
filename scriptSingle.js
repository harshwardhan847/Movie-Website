
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

let id = localStorage.getItem('id');
let container = document.querySelector('.container');


let url_id = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=368ada029f20db0a7a4a9cfb469ee031'
// console.log(url_id);
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)
    if (data.length === 0) {
      main.innerHTML = "";
      const createErrorEl = document.createElement("div");
      createErrorEl.classList.add("errorHandle");
      createErrorEl.innerHTML = `<h1>Oh no 🙅🏻 ! There is no such movie exists</h1>`;
      main.appendChild(createErrorEl);
    } else {
        // console.log(data)
      showMovies(data);
    }
  }
// getMovies(url_id)

  function showMovies(movie) {
    const mainSingle = document.getElementById('single-main')
    mainSingle.innerHTML = "";
    console.log(movie)
    // createEl.classList.add("movie");
    let img = IMG_PATH+movie.backdrop_path
    let poster = IMG_PATH+movie.poster_path
    console.log(img)
    mainSingle.innerHTML = `
    <h1 class="original_title">${movie.original_title}</h1>
    <img src="${img}" alt="Backdrop Image" class="backdrop">
    <div class="container flex main-content">
        <div class="original_language"><span>Language : </span>${movie.original_language}</div>
        <div class="status"><span>Status : </span>${movie.status}</div>
        <div class="overview-single"><span>Overview : </span>${movie.overview}</div>
        <div class="budget"><span>Budget : </span>${movie.budget}</div>
        <div class="tagline"><span>Tagline : </span>${movie.tagline}</div>
        <div class="vote_average ${getOverviewRating(movie.vote_average)}"><span class="rating">Rating : </span>${movie.vote_average}</div>
        <div class="vote_count"><span>Vote Count : </span>${movie.vote_count}</div>
        <div class="genres"><span>Geners : </span>${movie.genres[0].name}</div>
        <div class="production_companies">

        </div>
        <div class="production_countries">

        </div>
        <div class="release_date"><span>Release date : </span>${movie.release_date}</div>
        <div class="revenue"><span>Revenue : </span>${movie.revenue}</div>
        <div class="runtime"><span>Runtime : </span>${movie.runtime}min</div>
        
        <img src="${poster}" alt="" class="poster">
        <a href="${movie.homepage}" class="watchNow primary-button">Watch Now</a>

        
        
    </div>



`;
  }
  
  function getOverviewRating(rating) {
    if (rating >= 8) {
      return "green";
    } else if (rating >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
  getMovies(url_id)


  // container.innerHTML = `<div>${id}</div>`;