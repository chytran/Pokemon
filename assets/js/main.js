// Store API
var api = {
    link: "https://pokeapi.co/api/v2/pokemon"
}

// Get api through JSON


// Get pokemon on search
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon${id}`;
    const res = await fetch(url)
    const pokemon = await res.json();
    console.log(pokemon);
}


