/* const profileContainer = document.querySelector(".profile-container");
const inputField = document.querySelector("form");
const message = document.querySelector(".message");

//eventListeners
inputField.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(getInput());
});

//functions

function getInput() {
  return document.querySelector("input").value;
}

async function getData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw response;
    message.textContent = "";
    const data = await response.json();
    generateProfile(data);
  } catch (e) {
    const error = (await e.json()).message;
    notFound(error);
    console.error(error);
  }
}

function generateProfile(data) {
  // create profile
  const profile = document.createElement("div");
  profile.className = "profile";
  // create img and add to profile
  const userImage = document.createElement("div");
  userImage.className = "image-container";
  userImage.style.backgroundImage = `url("${data.avatar_url}")`;
  profile.appendChild(userImage);
  // create user name and add to profile
  const userName = document.createElement("h3");
  userName.className = "user-name-holder";
  userName.textContent = data.name;
  profile.appendChild(userName);
  // create repo count and add to profile
  const reposCount = document.createElement("h3");
  reposCount.className = "repos-count-holder";
  reposCount.textContent = `Repos Count: ${data.public_repos}`;
  profile.appendChild(reposCount);
  // append profile to profiles container
  profileContainer.appendChild(profile);
}

function notFound(error) {
  message.textContent = error;
}
 */

// event for button search
/* const fetchProfile = async (ussername) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  // const {public_repos, avatar_url, login} = await response.json();
  const transformedData = {
    repos: data.public_repos,
    img: data.avatar_url,
    name: data.login,
  };
  return transformedData;
  //console.log(data);
};

const addEvents = () => {
  button.addEventListener("click", async () => {
    try {
      if (input.value !== "") {
        //?no input
        await fetchProfile("input.value");
      }
    } catch (e) {
      console.log(e.message);
    }
  });
  //  input.addEventListener("click", async () => {
}; */

//https://api.github.com/users/{var}

const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector(".container");
const movieArr = [];

//* DOM manipulation ----------------------------
const setMovieCard = (movieObj) => {
  const card = document.createElement("div");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  const h5 = document.createElement("h5");
  card.classList.add("card");
  img.src = movieObj.img;
  h4.textContent = movieObj.name;
  h5.textContent = movieObj.repos;
  card.appendChild(img);
  div.appendChild(h4);
  div.appendChild(h5);
  card.appendChild(div);
  container.appendChild(card);
};

//* API ----------------------------
const fetchMovieAndTransform = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}
  `);
  //   const { public_repos, avatar_url, login } = await response.json();
  const data = await response.json();
  console.log("data → ", data);
  const transformedData = {
    repos: data.public_repos,
    img: data.avatar_url,
    name: data.login,
  };
  //   console.log('transformedData → ', transformedData);
  return transformedData;
};

//*  Async ----------------------------
const getMovie = async () => {
  if (input.value !== "") {
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
  button.addEventListener("click", getMovie);
  input.addEventListener("keyup", inputHandler);
};

const inputHandler = (e) => {
  if (e.key === "Enter") {
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
