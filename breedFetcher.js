const request = require("request");
const breed = process.argv[2];

// Helper function
const urlPath = (breed) => {
  return `https://api.thecatapi.com/v1/breeds/search?q=${breed}`; // API URL/Endpoint
};

request(urlPath(breed), (error, response, body) => {
  // Edge Case: Request Failed
  if (error) {
    console.log(error);
    return;
  }
  // Parsing the JSON string to actual object
  const data = JSON.parse(body);
  // Edge Case: Breed not found
  if (data.length === 0) {
    console.log("Breed was not found");
    return;
  }
  console.log(data[0].description);  
});
