const movies = [
  {
    title: "Inception",
    releaseDate: "2010-07-16",
    genre: "Sci-Fi",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg",
  },
  {
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    genre: "Action",
    cast: ["Christian Bale", "Heath Ledger"],
    image:
      "https://resizing.flixster.com/Wg25mLoPWxjcxXzNyaSF4VGgGE4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiNjZiNWFkLWVhNzEtNDRhMC1iNGIwLTFmY2FkNzllNTJlMi5qcGc=",
  },
  {
    title: "Interstellar",
    releaseDate: "2014-11-07",
    genre: "Sci-Fi",
    cast: ["Matthew McConaughey", "Jessica Chastain"],
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
  },
  {
    title: "Top Gun : Maverick",
    releaseDate: "2022-05-27",
    genre: "Action",
    cast: ["Tom Cruise", "Miles Teller"],
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg",
  },
  {
    title: "The Dictator",
    releaseDate: "2012-05-16",
    genre: "Comedy",
    cast: ["Sacha Baron Cohen", "Anna Faris"],
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8915813_p_v8_am.jpg",
  },
  {
    title: "The Shawshank Redemption",
    releaseDate: "1994-09-23",
    genre: "Drama",
    cast: ["Tim Robbins", "Morgan Freeman"],
    image:
      "https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Godfather",
    releaseDate: "1972-03-24",
    genre: "Drama",
    cast: ["Marlon Brando", "Al Pacino"],
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6326_p_v13_be.jpg",
  },
  {
    title: "The Matrix",
    releaseDate: "1999-03-31",
    genre: "Sci-Fi, Action",
    cast: ["Keanu Reeves", "Laurence Fishburne"],
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    title: "Forrest Gump",
    releaseDate: "1994-07-06",
    genre: "Drama,Romance",
    cast: ["Tom Hanks", "Robin Wright"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErtvmhJWnPbAtYjbGFgfvqv-AmMHWVfH8lQ&s",
  },
  {
    title: "Parasite",
    releaseDate: "2019-05-30",
    genre: "Drama,Thriller",
    cast: ["Kang-ho Song", "Sun-kyun Lee"],
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
  },
  {
    title: "Fight Club",
    releaseDate: "1999-10-15",
    genre: "Drama",
    cast: ["Tim Robbins", "Morgan Freeman"],
    image:
      "https://resizing.flixster.com/euv4H4ZForXBxHln42nJcUXydvo=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23069_v_v10_aa.jpg",
  },
  {
    title: "The Lord of the Rings",
    releaseDate: "1972-03-24",
    genre: "Sci-Fi",
    cast: ["Marlon Brando", "Al Pacino"],
    image:
      "https://play-lh.googleusercontent.com/5A1QcMFTZbzVJ1YABBqWvRKKUCrkK8OZpFpaK659PcHsOdaMs64MuO-ktDQnaZx2zji0JA=w240-h480-rw",
  },
  {
    title: "Gladiator",
    releaseDate: "1999-03-31",
    genre: "Action , Drama",
    cast: ["Keanu Reeves", "Laurence Fishburne"],
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24674_p_v13_bc.jpg",
  },
  {
    title: "Schindler's List",
    releaseDate: "1994-07-06",
    genre: "Drama,Romance",
    cast: ["Tom Hanks", "Robin Wright"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOBCDLJrUWzZzfSeoJx3uk11e2P-6gSYVSg&s",
  },
  {
    title: "The Social Network",
    releaseDate: "2019-05-30",
    genre: "Drama,Thriller",
    cast: ["Kang-ho Song", "Sun-kyun Lee"],
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8078163_p_v8_ag.jpg",
  },
  {
    title: "The Prestige",
    releaseDate: "1994-09-23",
    genre: "Drama",
    cast: ["Tim Robbins", "Morgan Freeman"],
    image:
      "https://resizing.flixster.com/ZPrv6RgLvc5e7c8SUtCyI4QiZnM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBlY2FlMDhiLTMwM2EtNDJmMS05NjBkLWM3ZDk5NjZlNjdkNi5qcGc=",
  },
  {
    title: "Goodfellas",
    releaseDate: "1972-03-24",
    genre: "Drama",
    cast: ["Marlon Brando", "Al Pacino"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUc2MEMo38UPfLTt9h_wm831trMiNlDMD4mA&s",
  },
  {
    title: "Se7en",
    releaseDate: "1999-03-31",
    genre: "Sci-Fi, Action",
    cast: ["Keanu Reeves", "Laurence Fishburne"],
    image: "https://static.tvtropes.org/pmwiki/pub/images/se7en_poster.png",
  },
  {
    title: "La La Land",
    releaseDate: "1994-07-06",
    genre: "Drama,Romance",
    cast: ["Tom Hanks", "Robin Wright"],
    image:
      "https://resizing.flixster.com/zNPeoE45iOdRndAq0ezZPXb1dEY=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12386480_p_v10_aj.jpg",
  },
  {
    title: "Whiplash",
    releaseDate: "2019-05-30",
    genre: "Drama,Thriller",
    cast: ["Kang-ho Song", "Sun-kyun Lee"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP84YZtk6WteBd3KpAKCqEEK_AhRvgOky_SQ&s",
  },
];

// Function to display movies on the home page
function displayMovies(filteredMovies = movies) {
  const movieContainer = document.getElementById("movies-container");
  movieContainer.innerHTML = "";

  filteredMovies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
    movieCard.addEventListener("click", () => {
      localStorage.setItem("selectedMovie", JSON.stringify(movie));
      window.location.href = "movie.html";
    });
    movieContainer.appendChild(movieCard);
  });
}

document.getElementById("search-bar").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );
  displayMovies(filteredMovies);
});

// Function to filter movies by genre
function filterMovies(genre) {
  const filteredMovies = movies.filter((movie) => movie.genre === genre);
  displayMovies(filteredMovies);
}

// Function to display selected movie details
if (window.location.pathname.includes("movie.html")) {
  const movieInfo = document.getElementById("movie-info");
  const movie = JSON.parse(localStorage.getItem("selectedMovie"));

  if (movie) {
    movieInfo.innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
            <img src="${movie.image}" alt="${movie.title}">
        `;
  }
  else{
    movieInfo.innerHTML=`<p>Movie not Found. Please go back and select a movie</p>`;
  }
}

// Initial display of all movies
displayMovies();
