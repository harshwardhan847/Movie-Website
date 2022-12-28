/* 

API Routes

Discover 
https://api.themoviedb.org/3/discover/movie?sort_by=opularity.desc&api_key=

Search 
https://api.themoviedb.org/3/search/movie?api_key=""&query=""

*/

const main = document.getElementById("main");
const form = document.getElementById("search_form");
const search = document.getElementById("search");
const logo = document.querySelector(".logo");

'use strict';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=368ada029f20db0a7a4a9cfb469ee031&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=368ada029f20db0a7a4a9cfb469ee031&query="';

async function getMovies(url){
    const res = await fetch(uri);
    const data = await res.json();
    if(data.results.length === 0){
        main.innerHTML = '';
        const createErrorEl = document.createElement('div')
        createErrorEl.classList.add('errorHandle')
        createErrorEl.innerHTML = `<h1>Oh no 🙅🏻 ! There is no such movie exists</h1>`;
        main.appendChild(createErrorEl);
    }
    else{
        showMovies(data.results);
    }
}

function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie)=>{
        const {title,poster_path,vote_average,overview} = movie;
        const createEl = document.createElement('div');
        createEl.classList.add('movie');

        createEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="movie image" class="movie-img" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getOverviewRating(
            vote_average
          )}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3 class="overview">
            ${overview}
          </h3>
        </div>
        `;
        main.appendChild(createEl);
    });
}


function getOverviewRating(rating){
   if (rating >= 8) {
    return 'green';
  } else if (rating >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}














