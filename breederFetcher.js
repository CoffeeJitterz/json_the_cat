const request = require("request");

const breed = process.argv.slice(2).join();

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    const data = JSON.parse(body);
    if (error !== undefined) {
      console.log(error);
    }

    if (data[0] === undefined) {
      console.log("!Breed Not Found!");
      return;
    }

    const description = data[0].description;
    console.log(description);
  }
);
