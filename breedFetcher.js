const request = require('request');
const breed = process.argv[2];




request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    throw new Error('Error requesting data!');
  } else if (response.statusCode !== 200) {
    throw new Error(`Error #${response.statusCode}`);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    throw new Error('Error C4T: Breed Not Found');
  }
  console.log(data[0].description);
});

