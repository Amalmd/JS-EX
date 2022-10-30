document.getElementById("getJoke").addEventListener("click", getJoke);

function getJoke() {
  fetch("https://api.jokes.one/jod")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Joke</h2>";
      data.forEach((res) => {
        
    })
    .catch((err) => {
      console.log(error);
    });
}
