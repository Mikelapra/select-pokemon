const contenedor = document.querySelector(".container");
const getpokemon = document.getElementById("get-pokemon");
let pokemon = document.getElementById('pokemon-select').value

function eligePokemon(pokemon) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then ((respuesta) =>respuesta.json())
        .then((data) => { 
            const tipo = data.types.map(typeInfo => typeInfo.type.name)
            const nombre = data.name;
            const peso = data.weight;
            const altura = data.height;
            const imagen = data.sprites.front_default;

            
            const datosPokemon = `
                <div>
                <h2>${nombre}</h2> 
                <img src="${imagen}" alt="${nombre}" />
                <p>Tipo ${tipo [0]}</p>
                <p>Altura: ${altura}, Peso: ${peso}</p>
                </div>`;

            contenedor.innerHTML = datosPokemon
        });
    }


getpokemon.addEventListener("click", function() {
    const pokemonSeleccionado = document.getElementById('pokemon-select').value;
    eligePokemon(pokemonSeleccionado);
});




//specname
//sprites
//types.type
//height
//weight