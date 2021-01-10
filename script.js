$(document).ready(function () {

  /* check if local storage has item, if yes fetch. Remove item after. */

  localStorage.getItem("fetchCastleInTheSky");
  if (localStorage.getItem("fetchCastleInTheSky") === "true") {
    fetchCastleInTheSky();
    localStorage.removeItem("fetchCastleInTheSky");
  }

  localStorage.getItem("fetchGraveOfTheFireflies");
  if (localStorage.getItem("fetchGraveOfTheFireflies") === "true") {
    fetchGraveOfTheFireflies();
    localStorage.removeItem("fetchGraveOfTheFireflies");
  }

  localStorage.getItem("fetchMyNeighbourTotoro");
  if (localStorage.getItem("fetchMyNeighbourTotoro") === "true") {
    fetchMyNeighbourTotoro();
    localStorage.removeItem("fetchMyNeighbourTotoro");
  }

  localStorage.getItem("fetchKikisDeliveryService");
  if (localStorage.getItem("fetchKikisDeliveryService") === "true") {
    fetchKikisDeliveryService();
    localStorage.removeItem("fetchKikisDeliveryService");

  }

  localStorage.getItem("fetchOnlyYesterday");
  if (localStorage.getItem("fetchOnlyYesterday") === "true") {
    fetchOnlyYesterday();
    localStorage.removeItem("fetchOnlyYesterday");
  }

  localStorage.getItem("fetchPorcoRosso");
  if (localStorage.getItem("fetchPorcoRosso") === "true") {
    fetchPorcoRosso();
    localStorage.removeItem("fetchPorcoRosso");
  }

  localStorage.getItem("fetchPomPoko");
  if (localStorage.getItem("fetchPomPoko") === "true") {
    fetchPomPoko();
    localStorage.removeItem("fetchPomPoko");
  }

  localStorage.getItem("fetchWhisperOfTheHeart");
  if (localStorage.getItem("fetchWhisperOfTheHeart") === "true") {
    fetchWhisperOfTheHeart();
    localStorage.removeItem("fetchWhisperOfTheHeart");
  }

  localStorage.getItem("fetchPrincessMononoke");
  if (localStorage.getItem("fetchPrincessMononoke") === "true") {
    fetchPrincessMononoke();
    localStorage.removeItem("fetchPrincessMononoke");
  }

  localStorage.getItem("fetchMyNeighboursTheYamadas");
  if (localStorage.getItem("fetchMyNeighboursTheYamadas") === "true") {
    fetchMyNeighboursTheYamadas();
    localStorage.removeItem("fetchMyNeighboursTheYamadas");

  }

  localStorage.getItem("fetchSpiritedAway");
  if (localStorage.getItem("fetchSpiritedAway") === "true") {
    fetchSpiritedAway();
    localStorage.removeItem("fetchSpiritedAway");
  }

  localStorage.getItem("fetchTheCatReturns");
  if (localStorage.getItem("fetchTheCatReturns") === "true") {
    fetchTheCatReturns();
    localStorage.removeItem("fetchTheCatReturns");

  }

  localStorage.getItem("fetchHowlsMovingCastle");
  if (localStorage.getItem("fetchHowlsMovingCastle") === "true") {
    fetchHowlsMovingCastle();
    localStorage.removeItem("fetchHowlsMovingCastle");
  }

  localStorage.getItem("fetchTalesFromEarthsea");
  if (localStorage.getItem("fetchTalesFromEarthsea") === "true") {
    fetchTalesFromEarthsea();
    localStorage.removeItem("fetchTalesFromEarthsea");
  }

  localStorage.getItem("fetchPonyo");
  if (localStorage.getItem("fetchPonyo") === "true") {
    fetchPonyo();
    localStorage.removeItem("fetchPonyo");
  }

  localStorage.getItem("fetchArrietty");
  if (localStorage.getItem("fetchArrietty") === "true") {
    fetchArrietty();
    localStorage.removeItem("fetchArrietty");
  }

  localStorage.getItem("fetchFromUpOnPoppyHill");
  if (localStorage.getItem("fetchFromUpOnPoppyHill") === "true") {
    fetchFromUpOnPoppyHill();
    localStorage.removeItem("fetchFromUpOnPoppyHill");
  }

  localStorage.getItem("fetchTheWindRises");
  if (localStorage.getItem("fetchTheWindRises") === "true") {
    fetchTheWindRises();
    localStorage.removeItem("fetchTheWindRises");

  }

  localStorage.getItem("fetchTheTaleOfThePrincessKaguya");
  if (localStorage.getItem("fetchTheTaleOfThePrincessKaguya") === "true") {
    fetchTheTaleOfThePrincessKaguya();
    localStorage.removeItem("fetchTheTaleOfThePrincessKaguya");
  }

  localStorage.getItem("fetchWhenMarnieWasThere");
  if (localStorage.getItem("fetchWhenMarnieWasThere") === "true") {
    fetchWhenMarnieWasThere();
    localStorage.removeItem("fetchWhenMarnieWasThere");
  }

/* Function to fetch Castle in the Sky*/

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
        console.log(data)
        const html = [data]
          .map(movie => {
            return `
          <div class="movie">
            <h1>${movie.title}</h1>
            <p>${movie.description}</p>

            <div class="img">
              <image src="Images/CastleInTheSky.JPG" width="500px" height="700px"> </image>
            </div>
            </div>

          `;
          })
          .join("");
          console.log(html)
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
        fetch("https://ghibliapi.herokuapp.com/people/2cb76c15-772a-4cb3-9919-3652f56611d0").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/f6f2c477-98aa-4796-b9aa-8209fdeed6b9").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/05d8d01b-0c2f-450e-9c55-aa0daa34838e").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/b22a684f-1819-40c8-94a6-d40c3b5e18eb").then(resp => resp.json()),

      ])

      .then(data => {
        console.log(data);
        const html = data
          .map(people => {
            return `
          <div class="people">
            <h1>${people.name}</h1>
            <p>Age: ${people.age}</p>

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
  }

  /*Function to fetch Grave of the Fireflies*/

  function fetchGraveOfTheFireflies() {
    fetch("https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a")
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

          <div class="img">
          <image src="Images/GraveOfTheFireflies.jpg" width="500px" height="700px"> </image>
          </div>

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
  }

/*Function to fetch My Neighbour Totoro*/

  function fetchMyNeighbourTotoro() {
    fetch("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
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

          <div class="img">
          <image src="Images/MyNeighbourTotoro.JPG" width="500px" height="700px"> </image>
          </div>
          

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
        fetch("https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/591524bc-04fe-4e60-8d61-2425e42ffb2a").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/c491755a-407d-4d6e-b58a-240ec78b5061").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583").then(resp => resp.json()),


      ])

      .then(data => {
        console.log(data);
        const html = data
          .map(people => {
            return `
        <div class="people">
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

  /*Function to fetch Kiki's Delivery Service*/

  function fetchKikisDeliveryService() {
    fetch("https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e")
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

          <div class="imgkiki">
          <image src="Images/KikisDeliveryService.JPG" width="500px" height="700px"> </image>
          </div>

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
        fetch("https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec").then(resp => resp.json()),

      ])

      .then(data => {
        console.log(data);
        const html = data
          .map(people => {
            return `
        <div class="people">
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

  /*Function to fetch Only Yesterday*/

  function fetchOnlyYesterday() {
    fetch("https://ghibliapi.herokuapp.com/films/4e236f34-b981-41c3-8c65-f8c9000b94e7")
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

          <div class="imgonly">
          <image src="Images/OnlyYesterday.JPG" width="500px" height="700px"> </image>
          </div>

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

  }

  /*Function to fetch Porco Rosso*/

  function fetchPorcoRosso() {
    fetch("https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8")
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

          <div class="img">
          <image src="Images/PorcoRosso.JPG" width="500px" height="700px"> </image>
          </div>

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
        fetch("https://ghibliapi.herokuapp.com/people/6523068d-f5a9-4150-bf5b-76abe6fb42c3").then(resp => resp.json()),


      ])

      .then(data => {
        console.log(data);
        const html = data
          .map(people => {
            return `
        <div class="people">
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

  /*Function to fetch Pom Poko*/

  function fetchPomPoko() {
    fetch("https://ghibliapi.herokuapp.com/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c")
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

          <div class="img">
          <image src="Images/PomPoko.JPG" width="500px" height="700px"> </image>
          </div>

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

  }

  /*Function to fetch Whisper of the Heart*/

  function fetchWhisperOfTheHeart() {
    fetch("https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3")
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

          <div class="imgheart">
          <image src="Images/WhisperOfTheHeart.JPG" width="500px" height="700px"> </image>
          </div>

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
        fetch("https://ghibliapi.herokuapp.com/people/fc196c4f-0201-4ed2-9add-c6403f7c4d32").then(resp => resp.json()),


      ])

      .then(data => {
        console.log(data);
        const html = data
          .map(people => {
            return `
        <div class="people">
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

  /*Function to fetch Princess Mononoke*/

  function fetchPrincessMononoke() {
    fetch("https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6")
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

          <div class="img">
          <image src="Images/PrincessMononoke.JPG" width="500px" height="700px"> </image>
          </div>

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
        fetch("https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/ebe40383-aad2-4208-90ab-698f00c581ab").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/34277bec-7401-43fa-a00a-5aee64b45b08").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/91939012-90b9-46e5-a649-96b898073c82").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/20e3bd33-b35d-41e6-83a4-57ca7f028d38").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/8bccdc78-545b-49f4-a4c8-756163a38c91").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/116bfe1b-3ba8-4fa0-8f72-88537a493cb9").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/030555b3-4c92-4fce-93fb-e70c3ae3df8b").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/e9356bb5-4d4a-4c93-aadc-c83e514bffe3").then(resp => resp.json()),

      ])

      .then(data => {
        console.log(data);
        const html = data
          .map(people => {
            return `
        <div class="people">
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

  /*Function to fetch My Neighbours The Yamadas*/

  function fetchMyNeighboursTheYamadas() {
    fetch("https://ghibliapi.herokuapp.com/films/45204234-adfd-45cb-a505-a8e7a676b114")
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

          <div class="img">
          <image src="Images/MyNeighboursTheYamadas.JPG" width="500px" height="700px"> </image>
          </div>

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

  }

  /*Function to fetch Spirited Away*/

  function fetchSpiritedAway() {
    fetch("https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c")
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

          <div class="img">
          <image src="Images/SpiritedAway.JPEG" width="500px" height="700px"> </image>
          </div>

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

  }

  /*Function to fetch The Cat Returns*/

  function fetchTheCatReturns() {
    fetch("https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81")
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

          <div class="img">
          <image src="Images/TheCatReturns.JPG" width="500px" height="700px"> </image>
          </div>

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
        fetch("https://ghibliapi.herokuapp.com/people/6b3facea-ea33-47b1-96ce-3fc737b119b8").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/3042818d-a8bb-4cba-8180-c19249822d57").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/58d1973f-f247-47d7-9358-e56cb0d2b5a6").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/a3d8e70f-46a0-4e5a-b850-db01620d6b92").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/fc196c4f-0201-4ed2-9add-c6403f7c4d32").then(resp => resp.json()),
        fetch("https://ghibliapi.herokuapp.com/people/466bc926-2024-4653-ac63-fe52f2dc8c7b").then(resp => resp.json()),


      ])

      .then(data => {
        console.log(data);
        const html = data
          .map(people => {
            return `
        <div class="people">
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

  /*Function to fetch Howl's Moving Castle*/

  function fetchHowlsMovingCastle() {
    fetch("https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa")
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

          <div class="imghowl">
          <image src="Images/HowlsMovingCastle.JPG" width="500px" height="700px"> </image>
          </div>

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

  }

  /*Function to fetch Tales From Earthsea*/

  function fetchTalesFromEarthsea() {
    fetch("https://ghibliapi.herokuapp.com/films/112c1e67-726f-40b1-ac17-6974127bb9b9")
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

          <div class="imgheart">
          <image src="Images/TalesFromEarthsea.JPG" width="500px" height="700px"> </image>
          </div>

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

  }

  /*Function to fetch Ponyo*/

  function fetchPonyo() {
    fetch("https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786")
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

          <div class="imgheart">
          <image src="Images/Ponyo.JPG" width="500px" height="700px"> </image>
          </div>

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
        fetch("https://ghibliapi.herokuapp.com/people/a10f64f3-e0b6-4a94-bf30-87ad8bc51607").then(resp => resp.json()),


      ])

      .then(data => {
        console.log(data);
        const html = data
          .map(people => {
            return `
        <div class="people">
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

  /*Function to fetch Arrietty*/

  function fetchArrietty() {
    fetch("https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6")
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

          <div class="imgarrietty">
          <image src="Images/Arrietty.JPG" width="500px" height="700px"> </image>
          </div>

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
        fetch("https://ghibliapi.herokuapp.com/people/89026b3a-abc4-4053-ab1a-c6d2eea68faa").then(resp => resp.json()),


      ])

      .then(data => {
        console.log(data);
        const html = data
          .map(people => {
            return `
        <div class="people">
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

  /*Function to fetch From Up on Poppy Hill*/

  function fetchFromUpOnPoppyHill() {
    fetch("https://ghibliapi.herokuapp.com/films/45db04e4-304a-4933-9823-33f389e8d74d")
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

          <div class="img">
          <image src="Images/FromUpOnPoppyHill.JPG" width="500px" height="700px"> </image>
          </div>

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

  }

  /*Function to fetch The Wind Rises*/

  function fetchTheWindRises() {
    fetch("https://ghibliapi.herokuapp.com/films/67405111-37a5-438f-81cc-4666af60c800")
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

          <div class="imgkiki">
          <image src="Images/TheWindRises.JPG" width="500px" height="700px"> </image>
          </div>

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

  }

  /*Function to fetch The Tale of The Princess Kaguya*/

  function fetchTheTaleOfThePrincessKaguya() {
    fetch("https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4")
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

          <div class="img">
          <image src="Images/TheTaleOfThePrincessKaguya.JPG" width="500px" height="700px"> </image>
          </div>

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

  }

  /*Function to fetch When Marnie Was There*/

  function fetchWhenMarnieWasThere() {
    fetch("https://ghibliapi.herokuapp.com/films/5fdfb320-2a02-49a7-94ff-5ca418cae602")
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

          <div class="img">
          <image src="Images/WhenMarnieWasThere.JPG" width="500px" height="700px"> </image>
          </div>

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

  }

/* Upon clicking an image, set item in local storage. Then redirect user to next page. */

  $("#fetchsky").on("click", function (e) {
    e.preventDefault();
    console.log('sky clicked');
    localStorage.setItem("fetchCastleInTheSky", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchgrave").on("click", function (e) {
    e.preventDefault();
    console.log('grave clicked');
    localStorage.setItem("fetchGraveOfTheFireflies", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchtotoro").on("click", function (e) {
    e.preventDefault();
    console.log('totoro clicked');
    localStorage.setItem("fetchMyNeighbourTotoro", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchkiki").on("click", function (e) {
    e.preventDefault();
    console.log('kiki clicked');
    localStorage.setItem("fetchKikisDeliveryService", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchonly").on("click", function (e) {
    e.preventDefault();
    console.log('yesterday clicked');
    localStorage.setItem("fetchOnlyYesterday", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchporco").on("click", function (e) {
    e.preventDefault();
    console.log('porco clicked');
    localStorage.setItem("fetchPorcoRosso", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchpom").on("click", function (e) {
    e.preventDefault();
    console.log('pom clicked');
    localStorage.setItem("fetchPomPoko", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchwhisper").on("click", function (e) {
    e.preventDefault();
    console.log('whisper clicked');
    localStorage.setItem("fetchWhisperOfTheHeart", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchmononoke").on("click", function (e) {
    e.preventDefault();
    console.log('mononoke clicked');
    localStorage.setItem("fetchPrincessMononoke", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchyamadas").on("click", function (e) {
    e.preventDefault();
    console.log('yamadas clicked');
    localStorage.setItem("fetchMyNeighboursTheYamadas", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchspirited").on("click", function (e) {
    e.preventDefault();
    console.log('spirited clicked');
    localStorage.setItem("fetchSpiritedAway", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchcat").on("click", function (e) {
    e.preventDefault();
    console.log('cat clicked');
    localStorage.setItem("fetchTheCatReturns", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchhowl").on("click", function (e) {
    e.preventDefault();
    console.log('howl clicked');
    localStorage.setItem("fetchHowlsMovingCastle", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchtales").on("click", function (e) {
    e.preventDefault();
    console.log('tales clicked');
    localStorage.setItem("fetchTalesFromEarthsea", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchponyo").on("click", function (e) {
    e.preventDefault();
    console.log('ponyo clicked');
    localStorage.setItem("fetchPonyo", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetcharrietty").on("click", function (e) {
    e.preventDefault();
    console.log('arrietty clicked');
    localStorage.setItem("fetchArrietty", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchpoppy").on("click", function (e) {
    e.preventDefault();
    console.log('poppy clicked');
    localStorage.setItem("fetchFromUpOnPoppyHill", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchwind").on("click", function (e) {
    e.preventDefault();
    console.log('wind clicked');
    localStorage.setItem("fetchTheWindRises", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchkaguya").on("click", function (e) {
    e.preventDefault();
    console.log('kaguya clicked');
    localStorage.setItem("fetchTheTaleOfThePrincessKaguya", "true")
    window.location.href = "moviedesc.html"

  });

  $("#fetchmarnie").on("click", function (e) {
    e.preventDefault();
    console.log('marnie clicked');
    localStorage.setItem("fetchWhenMarnieWasThere", "true")
    window.location.href = "moviedesc.html"


  })

});