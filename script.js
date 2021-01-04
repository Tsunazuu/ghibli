function fetchPeople() {
  fetch("https://ghibliapi.herokuapp.com/people")
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const html = data
        .map(people => {
          return `
          <div class="movie">
            <h1> name: ${people.name}</h1>
            <p> gender: ${people.gender}
            age: ${people.age}</p>

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




fetchPeople();

function fetchCastleInTheSky() {

  fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      console.log(response.json)
      return response.json();
    })
    .then(data => {
      console.log(data);
      const html = [data]
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
        document.querySelector("#app").insertAdjacentHTML("beforebegin", html);
    })
    .catch(error => {
      console.log(error);
    });

    /*fetch characters*/

  Promise.all([
    fetch("https://ghibliapi.herokuapp.com/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01").then(resp => resp.json()),
    fetch("https://ghibliapi.herokuapp.com/people/598f7048-74ff-41e0-92ef-87dc1ad980a9").then(resp => resp.json()),
    fetch("https://ghibliapi.herokuapp.com/people/3bc0b41e-3569-4d20-ae73-2da329bf0786").then(resp => resp.json()),
    fetch("https://ghibliapi.herokuapp.com/people/abe886e7-30c8-4c19-aaa5-d666e60d14de").then(resp => resp.json()),
    fetch("https://ghibliapi.herokuapp.com/people/e08880d0-6938-44f3-b179-81947e7873fc").then(resp => resp.json()),
    fetch("https://ghibliapi.herokuapp.com/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0").then(resp => resp.json()),
    fetch("https://ghibliapi.herokuapp.com/people/3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede").then(resp => resp.json()),
    fetch("https://ghibliapi.herokuapp.com/people/fcb4a2ac-5e41-4d54-9bba-33068db083ca").then(resp => resp.json()),

    ])
    
    .then(data => {
      console.log(data);
      const html = data
        .map(people => {
          return `
          <div class="movie">
            <h1>${people.name}</h1>
            <p>Age: ${people.age}</p>

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

  fetchCastleInTheSky();