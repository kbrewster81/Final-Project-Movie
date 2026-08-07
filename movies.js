let movies;

async function renderMovies(filter) {
  const moviesWrapper = document.querySelector(".movies");

  moviesWrapper.classList += " movies__loading";

  if (!movies) {
    movies = await getMovies();
  }

  moviesWrapper.classList.remove("movies__loading");

  if (filter === "SORT") {
    const filteredMovies = movies;
  }
  if (filter === "LOW_TO_HIGH") {
    const filteredMovies = movies.sort(
      (a, b) =>
        (a.year  - b.year),
    );
  } 
  else if (filter === "HIGH_TO_LOW") {
    const filteredMovies = movies.sort(
      (a, b) =>
        (b.year - a.year),
    );

  const moviesHtml = movies
    .map((movie) => {
      return `<div class="movie">
       <figure class="movie__img--wrapper">
         <img class="movie__img" src="${movie.url}" alt="">
       </figure>
       <div class="movie__title">
        ${movie.title}
       </div>
       <div class="movie__ratings">
        ${ratingsHTML(movie.rating)}
       </div>
       <div class="movie__price">
          ${priceHTML(movie.originalPrice, movie.salePrice)}
      </div>
     </div>`;
    })
    .join("");

  moviesWrapper.innerHTML = moviesHtml;
}



function filterMovies(event) {
  renderMovies(event.target.value);
}


// FAKE DATA

function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "The Terminator",
        
          Year: "1984",
          Type: "movie",
        },
        {
          id: 2,
          title: "Terminator 2: Judgment Day",
          url: "assets/Terminator 2.jpg",
          Year: "1991",
          Type: "movie",
        },
        {
          id: 3,
          title: "Terminator 3: Rise of the Machines",
          url: "assets/Terminator 3.jpg",
          Year: "2003",
          Type: "movie",
        },
        {
          id: 4,
          title: "The Terminator-Sarah Connor Chronicles",
          url: "assets/The Terminator-Sarah Connor Chronicles.jpg",
          Year: "2008",
          Type: "movie",
        },
        {
          id: 5,
          title: "Terminator Salvation",
          url: "assets/Terminator Salvation.jpg",
          Year: "2009",
          Type: "movie",
        },
        {
          id: 6,
          title: "Terminator Genisys",
          url: "assets/Terminator Genisys.jpg",
          Year: "2015",
          Type: "movie",
        },
      ]);
  });

})
