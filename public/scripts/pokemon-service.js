//app is our current anguar app and service is the service we are building
//use the $http from the original app
app.service('PokeService', function ($http) {
  var API = 'http://pokeapi.co/api/v2'

this.getAllPokemon = function() {
  //return the promise to the caller
  //http.get returns a promise
  return $http.get(API + '/pokemon').then(function(response){
    console.log("got a response from the API", response);
    //when the promise is resolved this data will be returned
    return response.data.results;
  }).catch(function(err){
    console.log("error getting info from API", err);
  });
};//end of getAllPokemon

  //receving a pokemon object
this.getPokemon = function(pokemon) {
  return $http.get(pokemon.url).then(function(response){
    console.log('pokemon info', response.data);
    var foundPokemon = response.data;
    return foundPokemon.sprites.front_default;//image
  }).catch(function(err){
    console.log("error getting info from API", err);
  });

};//end of getPokemon

});//end of app.service
