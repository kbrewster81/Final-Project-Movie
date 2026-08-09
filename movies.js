let movies;

async function renderMovies(filter) {
  const moviesWrapper = document.querySelector(".movies");

  if (!movies) {
    movies = await getMovies();
  }

  let filteredMovies = [...movies];

  if (filter === "LOW_TO_HIGH") {
    filteredMovies.sort((a, b) => Number(a.Year) - Number(b.Year));
  } else if (filter === "HIGH_TO_LOW") {
    filteredMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
  }

  const moviesHtml = filteredMovies
    .map((movie) => {
      return `
        <div class="movie">
          <figure class="movie__img--wrapper">
            <img class="movie__img" src="${movie.Poster}" alt="${movie.Title}">
          </figure>
          <div class="movie__Title">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
          </div>
        </div>
      `;
    })
    .join("");

  moviesWrapper.innerHTML = moviesHtml;
}




function filterMovies(event) {
  renderMovies(event.target.value);
}

async function searchMovies() {
  const searchTerm = document.querySelector(".input__search").value.trim();

  if (!searchTerm) return;

  const response = await fetch(
    `https://www.omdbapi.com/?apikey= cc724532&s=${encodeURIComponent(searchTerm)}`
  );
  const data = await response.json();

  movies = data.Search || [];
  renderMovies();
}

document
  .querySelector(".btn__search")
  .addEventListener("click", searchMovies);


function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          Title: "The Terminator",
          Poster: "/assets/The Terminator.jpg",
          Year: "1984",
          Type: "movie",
        },
        {
          id: 2,
          Title: "Terminator 2: Judgment Day",
          Poster: "assets/Terminator-2.jpg",
          Year: "1991",
          Type: "movie",
        },
        {
          id: 3,
          Title: "Terminator 3: Rise of the Machines",
          Poster: "assets/Terminator-3.jpg",
          Year: "2003",
          Type: "movie",
        },
        {
          id: 4,
          Title: "The Terminator-Sarah Connor Chronicles",
          Poster: "assets/The Terminator-Sarah Connor Chronicles.jpg",
          Year: "2008",
          Type: "movie",
        },
        {
          id: 5,
          Title: "Terminator Salvation",
          Poster: "assets/Terminator-Salvation.jpg",
          Year: "2009",
          Type: "movie",
        },
        {
          id: 6,
          Title: "Terminator Genisys",
          Poster: "assets/Terminator-Genisys.jpg",
          Year: "2015",
          Type: "movie",
        },
      ]);
  });

})}