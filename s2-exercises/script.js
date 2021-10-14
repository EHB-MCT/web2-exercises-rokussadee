"use strict"

window.onload = function() {
    console.log('loaded')

    let emptyTeamText = 'You currently have no pokemon in your team.';
    let addToTeamText = '';

    document.getElementById('textContainer').innerHTML = emptyTeamText;
    
    let pokemonList = [];
    
    fetch(' https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json()
    )
    .then(data => {        
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(data2 => {
                pokemonList.push(data2)
            });
        });
    })

    setTimeout(initList, 3000);

    function initList() {
        pokemonList.sort((a, b) => a.id - b.id);
    
        console.log(pokemonList);
    
        let htmlString = '';
        pokemonList.forEach((pokemon) => {

            let typeArray = pokemon.types.map(typeObject => typeObject.type.name);
            let typeListHTML = '';
            typeArray.forEach((type) => {
                typeListHTML += `<p class="${type} type">${type}</p>`;
            });
            
            htmlString += `
            <div class = "pokeCard">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
                <div class="typeContainer">
                    ${typeListHTML}
                </div>
                <button data-id="${pokemon.id}">Add</button>
            </div>
            `;
        })
        document.getElementById('listContainer').innerHTML = htmlString;

        const buttonList = document.querySelectorAll('button');

        buttonList.forEach((button, i) => {
            button.addEventListener('click', function() {
                document.getElementById('textContainer').innerHTML = `
                Your team currently consists of the following pokemon:
                <ul>
                ${addToTeam(i)}
                </ul>
                `
            });
        });
    }

    function addToTeam(id) {
        addToTeamText += `<li>
        <span class = "${pokemonList[id].types[0].type.name} type">
            ${pokemonList[id].name}</span>
        </li>`;
        return addToTeamText;
    }

}