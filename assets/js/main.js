// Store API
var api = {
    link: "https://pokeapi.co/api/v2/pokemon"
}

// Variables
const container = document.querySelector(".container");

// Loop to get multiple pokemon
const fetchPokemon = async () => {
    for (let i = 1; i <= 151; i++){
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
        <img src="${pokemon.sprites.front_default}" alt="">
        <p class="pokeName">${pokemon.name}</p>
        <div class="stats__main__container">
            <div class="stats__container">
                <div class="pokeStatTitle">${pokemon.stats[0].stat.name}</div>
                <span class="pokeAttackStat">${pokemon.stats[0].base_stat}</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">${pokemon.stats[1].stat.name}</div>
                <span class="pokeAttackStat">${pokemon.stats[1].base_stat}</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">${pokemon.stats[2].stat.name}</div>
                <span class="pokeAttackStat">${pokemon.stats[2].base_stat}</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">${pokemon.stats[3].stat.name}</div>
                <span class="pokeAttackStat">${pokemon.stats[3].base_stat}</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">${pokemon.stats[4].stat.name}</div>
                <span class="pokeAttackStat">${pokemon.stats[4].base_stat}</span>
            </div>

            <div class="stats__container">
                <div class="pokeStatTitle">${pokemon.stats[5].stat.name}</div>
                <span class="pokeAttackStat">${pokemon.stats[5].base_stat}</span>
            </div>
        </div>
    `;

    pokeContainer.innerHTML = poke;

    container.appendChild(pokeContainer);
}

// Fetch Pokemon
fetchPokemon();

