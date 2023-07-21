const cardTemplate = document.getElementById("cardTemplate");
const cardsContainer = document.getElementById("cardsContainer");

fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {
          const clone = cardTemplate.content.cloneNode(true);
          clone.querySelector("h2").textContent = pokemon.name;
          cardsContainer.appendChild(clone);
        });
    });
  });
