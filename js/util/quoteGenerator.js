fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=1", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "95aea2d802msh2a617611cb74ff5p1a0133jsnfdf9c2c42b83",
    "x-rapidapi-host": "famous-quotes4.p.rapidapi.com"
  }
})
  .then(response => response.json())
  .then(data => {
    document.getElementById("quote").innerHTML = `"${data[0].text}"`;
    document.getElementById("author").innerHTML = `~${data[0].author}`;
  })
  .catch(error => console.error("Error fetching quote:", error));
