// Store API
var api = {
    link: "https://pokeapi.co/api/v2/pokemon"
}

// Variables
const container = document.querySelector(".container");

// Loop to get multiple pokemon
const fetchPokemon = async () => {
    for (let i = 1; i <= 1; i++){
        await getPokemon(i);
    }
}

// Get Pokemon through API
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    pokeCard(data);
    console.log(data);
}

// Place information into container to display
function pokeCard(pokemon){
    const pokeContainer = document.createElement("div");
    pokeContainer.classList.add("pokemon");

    const poke = `
        <h2 class="pokeID">${pokemon.id}</h2>
        <img src="${pokemon.sprites.back_default}" alt="">
        <p class="pokeName">${pokemon.name}</p>
        <div class="stats__main__container">
            <div class="stats__container">
                <div class="pokeStatTitle">Attack Base Stats</div>
                <span class="pokeAttackStat">45</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">Attack Base Stats</div>
                <span class="pokeAttackStat">45</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">Attack Base Stats</div>
                <span class="pokeAttackStat">45</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">Attack Base Stats</div>
                <span class="pokeAttackStat">45</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">Attack Base Stats</div>
                <span class="pokeAttackStat">45</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">Attack Base Stats</div>
                <span class="pokeAttackStat">45</span>
            </div>
        </div>
        <h2>${pokemon.id}</h2>
        <p>${pokemon.name}</p>
        <span>${pokemon.stats[0].base_stat}</span>
    `;

    pokeContainer.innerHTML = poke;

    container.appendChild(pokeContainer);
}

// Fetch Pokemon
fetchPokemon();

