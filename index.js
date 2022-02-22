const { fetchBreedDescription } = require("./breedFetcher");
const breed = process.argv[2];

// Calling the fetchBreedDescription from breedFetcher.js
fetchBreedDescription(breed, (error, description) => {
  if (error !== null) {
    console.log("Error fetch details:", error);
  } else {
    console.log(description);
  }
});