function fetchData() {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const html = data
        .map(movie => {
          return `
          <div class="movie">
            <h1>${movie.title}</h1>
            <p>${movie.description}</p>
          </div>
          `;
        })
        .join("");
        console.log(html);
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
      console.log(error);
    });
}

fetchData();
