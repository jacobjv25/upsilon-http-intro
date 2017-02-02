var app = angular.module('pokeApp', []);

app.controller('PokemonController', function(PokeService){
  console.log('PokemonController loaded');

  var ctrl = this;

  ctrl.pokemonList = [{name: 'Charmander'},
                      {name: 'Bulbasuar'},
                      {name: 'Squirtle'},
                      {name: 'Pikachu'}
                    ];

  ctrl.currentPokemon = {};

  var currentlySelectedPokemon = {}

  PokeService.getAllPokemon().then(function(pokeList) {
    ctrl.pokemonList = pokeList;
  });


  ctrl.iChooseYou = function(pokemon){
    console.log('I choose you,', pokemon);
    PokeService.getPokemon(pokemon).then(function (imageUrl){
      togglePokemon(pokemon);
      ctrl.currentPokemon.imageUrl = imageUrl;
      ctrl.currentPokemon.name = pokemon.name;
    });
  };//end of iChooseYou

  //not attached to the controller, just needs to exist inside of it
  //need to track which the current pokemon is
  function togglePokemon(pokemon) {
    currentlySelectedPokemon.chosen = false;
    currentlySelectedPokemon = pokemon;
    pokemon.chosen = true;
  };//end of togglePokemon
});//end of controller
