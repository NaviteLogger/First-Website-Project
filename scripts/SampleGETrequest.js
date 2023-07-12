fetch("https://api.example.com/data")
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("HTTP status code: " + response.status);
    }
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
