//https://api.github.com/users/{var}

const button = document.querySelector('button');
const input = document.querySelector('input');
const container = document.querySelector('.container');
const movieArr = [];

//* DOM manipulation ----------------------------
const setMovieCard = (movieObj) => {
  const card = document.createElement('div');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h4 = document.createElement('h4');
  const h5 = document.createElement('h5');
  card.classList.add('card');
  img.src = movieObj.img;
  h4.textContent = movieObj.title;
  h5.textContent = movieObj.year;
  card.appendChild(img);
  div.appendChild(h4);
  div.appendChild(h5);
  card.appendChild(div);
  container.appendChild(card);
};

//* API ----------------------------
const fetchMovieAndTransform = async (movie) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=f3657fc8&t=${movie}
  `);
  //   const { public_repos, avatar_url, login } = await response.json();
  const data = await response.json();
  //   console.log('data → ', data);
  const transformedData = { id: data.imdbID, img: data.Poster, title: data.Title, year: data.Year };
  //   console.log('transformedData → ', transformedData);
  return transformedData;
};

//*  Async ----------------------------
const getMovie = async () => {
  if (input.value !== '') {
    const movie = await fetchMovieAndTransform(input.value); //! async
    const isNew = setMovieToArr(movie);
    if (isNew) {
      setMovieCard(movie);
    }
  }
};

//*  setters ----------------------------
const setMovieToArr = (newMovie) => {
  const check = movieArr.some((movie) => movie.id === newMovie.id);
  if (!check) {
    movieArr.push(newMovie);
    return true;
  }
  return false;
};

//*  Events ----------------------------
const addEvents = () => {
  button.addEventListener('click', getMovie);
  input.addEventListener('keyup', inputHandler);
};

const inputHandler = (e) => {
  if (e.key === 'Enter') {
    getMovie();
  }
};

//* Functionality ---------------------------
const startApp = () => {
  addEvents();
};

startApp();

// !! dummy data - Delete later
// const tempObj = {
//   img: 'https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg',
//   title: 'Rambo',
//   year: '2008',
// };
