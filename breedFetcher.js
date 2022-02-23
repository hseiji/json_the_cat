const request = require("request");

const fetchBreedDescription = (breed, callback) => {
  // Helper function
  const urlPath = (breed) => {
    return `https://api.thecatapi.com/v1/breeds/search?q=${breed}`; // API URL/Endpoint
  };

  request(urlPath(breed), (error, response, body) => {
    // Edge Case: Request Failed
    if (error) {
      return callback(error);
    }
    // Parsing the JSON string to actual object
    const data = JSON.parse(body);
  
    // Edge Case: Breed not found
    if (data.length === 0) {
      // return callback(error, "Breed was not found");
      return callback("Breed was not found");
    }
    // It returns the breed's description
    return callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
