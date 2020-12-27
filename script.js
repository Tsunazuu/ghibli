let searchFunction = document.querySelector("#search")

searchFunction.addEventListener("click", () =>{
  console.log("Search Activated")
  sendApiRequest()
})

async function sendApiRequest(){
  let response = await fetch ("'https://ghibliapi.herokuapp.com/films")
  console.log(response)
  let data = await response.json()
  console.log(data)
  userApiData(data)
}

function userApiData(data){
    document.querySelector("#content").innerHTML = `
    <div class="display" style="width: 200px;">
  <img src="${data.hits[0].movie}" class="display-image" alt="">
  <div class="display-body">
   <h1 class="display-title">${data.hits[0].movie}</h1>
   <p class="display-text">Movie/Show's backstory and other basic information.</p>
  </div>
</div>
`}
