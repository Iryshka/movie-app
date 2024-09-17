const url = "https://imdb-top-100-movies.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "afdff19015msh64e2d070e643ec1p1b82d0jsn7f9a491597b1",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
