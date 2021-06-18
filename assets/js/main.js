// Store API
var api = {
    link: "https://pokeapi.co/api/v2/pokemon"
}

// Variables
const container = document.querySelector(".container");

// Fetch Pokemon
const fetchPokemon = async () => {
    for (let i = 1; i <= 30; i++){
        await getPokemon(i);
    }
}

// Get pokemon on search
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url)
    const pokemon = await res.json();
    pokiCard(pokemon);
}

// Create pokemon information
function pokiCard(pokemon) {
    const pokeEl = document.createElement("div");
    pokeEl.classList.add("pokiCard");

    const pokiInfo = `
        ${pokemon.id}
    `;

    pokeEl.innerHTML = pokiInfo;

    container.appendChild(pokeEl);
}


