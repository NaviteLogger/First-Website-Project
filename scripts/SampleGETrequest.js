/*
 * Makes a GET request to 'https:...' and logs the response data to the console.
 * @throws {Error} If the HTTP status code is not ok.
 */
fetch("https://api.example.com/data")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("HTTP status code: " + response.status);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });