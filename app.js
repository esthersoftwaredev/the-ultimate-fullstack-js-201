// Buttons
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Get Random Star Wars Character
function getSwapi() {
  const randomNumber = Math.ceil(Math.random() * 83);

  fetch(`https://swapi.tech/api/people/${randomNumber}`)
    .then((response) => response.json())
    .then((character) => {
      console.log(character.result.properties);
      const charProperties = character.result.properties;
      document.getElementById(
        "output1"
      ).innerHTML = `<h3><i>Name: </i>${charProperties.name}</h3>
      <ul><li><i>Birth Year: </i>${charProperties.birth_year}</li>
      <li><i>Hair Color: </i>${charProperties.hair_color}</li>
      <li><i>Eye Color: </i>${charProperties.eye_color}</li>
      <li><i>Gender: </i>${charProperties.gender}</li>
      </ul>`;
    });
}

// Get Random Chuck Norris Joke
function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.value);
      document.getElementById("output2").innerHTML = `<p>${data.value}</p>`;
    });
}

// Event Listener for Swapi
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  getSwapi();
});

// Event Listener for Joke
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  getJoke();
});
