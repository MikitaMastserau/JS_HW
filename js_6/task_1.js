const POK_URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonsListWithoutDestruct = async () => {
    try {
        const pokemonList = await fetch(POK_URL).then((response) => response.json());
        console.log(pokemonList);

        const pokemonDetails = pokemonList.results.map((pokemon) => fetch(pokemon.url).then((response) => response.json()));
        console.log(pokemonDetails);

        const result = await Promise.all(pokemonDetails);
        console.log(result);
    } catch (error) {
    };
};

getPokemonsListWithoutDestruct();


const getPokemonsList = async () => {
    try {
        const {results: pokemonList} = await fetch(POK_URL).then((response) => response.json());
        console.log(pokemonList);

        const pokemonDetails = pokemonList.map(({url}) => fetch(url).then((response) => response.json()));
        console.log(pokemonDetails);

        const result = await Promise.all(pokemonDetails);
        console.log(result);
    } catch (error) {
    };
};

getPokemonsList();