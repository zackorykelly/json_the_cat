const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(`Error #${response.statusCode}`, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback('Breed not found', null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};




module.exports = { fetchBreedDescription };