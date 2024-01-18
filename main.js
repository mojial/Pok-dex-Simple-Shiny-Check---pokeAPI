let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

let card = document.getElementsByClassName('container mt-4')[0];
card.style.visibility = 'hidden';
let buscador = document.getElementsByTagName('input')[0];
let botonBuscar = document.getElementsByTagName('button')[0];
let form = document.getElementsByTagName('form')[0];
let nombrePokemon = document.getElementsByClassName('card-title')[0];
let ataquePokemon = document.getElementsByClassName('card-text')[0];
let image = document.getElementsByTagName('img')[0];
let botonVerPokemon = document.getElementsByTagName('a')[0];

// MODAL

// Ventana modal
let modal = document.getElementsByClassName("modal")[0];

// Elegir el Botón que abre el modal
let boton = document.getElementsByClassName("btn btn-primary")[0];

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span = document.getElementsByClassName("close-button")[0];

// Seleccionar el contenido a modificar del modal
let modalContent = modal.querySelector('.modal-content');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let apiURLBuscado = apiUrl + buscador.value
    fetch(apiURLBuscado)
        .then((response) => response.json())
        .then((data) => {
            card.style.visibility = 'visible';
            image.src = data.sprites.front_default;
            nombrePokemon.innerHTML = data.name;
            ataquePokemon.innerHTML = data.abilities[0].ability.name;

            boton.addEventListener("click",function() {
                modal.style.display = "block";
                modalContent.querySelector('h2').innerHTML = data.name +' shiny';
                modalContent.querySelector('p').innerHTML = '';
                let pokemonShinyImage = document.createElement('img');
                pokemonShinyImage.src = data.sprites.front_shiny;
                modalContent.querySelector('p').appendChild(pokemonShinyImage);
              });
            
            span.addEventListener("click",function() {
                modal.style.display = "none";
              });
            
            window.addEventListener("click",function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              });
        })

})
