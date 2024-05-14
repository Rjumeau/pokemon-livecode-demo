const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=100"
const pokemonCardTemplate = document.querySelector("#cardTemplate")
const pokemonCardsContainer = document.querySelector("#cardsContainer")

fetch(allPokemonUrl)
.then(response => response.json())
.then((pokemons) => {
  pokemons.results.forEach(pokemon => {
    fetch(pokemon.url)
    .then(response => response.json())
    .then(pokemonDetails => {
      const clonePokemonCard = pokemonCardTemplate.content.cloneNode(true)
      clonePokemonCard.querySelector("img").src = pokemonDetails.sprites.front_default
      clonePokemonCard.querySelector("h2").innerText = pokemon.name.toUpperCase()
      clonePokemonCard.querySelector("p").innerText = pokemonDetails.abilities
                                                                    .map(abilityItem => abilityItem.ability.name)
      pokemonCardsContainer.appendChild(clonePokemonCard);
    })
  });
})
