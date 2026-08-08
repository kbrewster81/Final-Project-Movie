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
            <img class="movie__img" src="${movie.url}" alt="${movie.title}">
          </figure>
          <div class="movie__title">
            <h3>${movie.title}</h3>
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
