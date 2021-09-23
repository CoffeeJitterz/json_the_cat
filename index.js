const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv.slice(2).join();

const callback = function(error, description){
  if(error){
    console.log("Error:" + error)
  } 
  console.log("description:" + description)
}

fetchBreedDescription(breed, callback)