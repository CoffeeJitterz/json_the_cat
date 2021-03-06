const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];

    if (!breed) {
      return callback(null, "Breed Not Found!");
    }

    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
