"use strict"

window.onload = function() {
    console.log('loaded')
    
    class Pokemon {
        constructor(name, image, types) {
            this.name = name;
            this.image = image;
            this.types = types;
        }
    }

    fetch(' https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => (
        response.json()
    ))
    .then(data => {
        console.log(data)
        let pokemonArray = data.results;
        pokemonArray.forEach(pokemon => {
            fetch(pokemon.url)
            .then(response => (
                response.json()
            ))
            .then(data => {
                console.log(data);
                new Pokemon(data.name, data.sprites.back_default)
            });
        });
    })
    let htmlString = `
    <div>
        <img src="" alt="">
        <h2></h2>
        <div class="typeContainer">
            <h3></h3>
            <h3></h3>
        </div>
    </div>
    `

    document.querySelector('body').insertAdjacentHTML('beforeend', htmlString) 
    
}