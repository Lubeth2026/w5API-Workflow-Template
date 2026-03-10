"use strict";

console.log("Greetings Earthlings!");

const btn = document.querySelector("button");
const main2 = document.getElementById("main");

//Generic/fetch request Function//
//Typed 3rd//
async function fetchData(url, options) {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("Error in fetching data...");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

//Specific/GET Fetch Function//Only applies to specific fetch//
//Typed 1st//
async function starWars(id) {
  try {
    const res = await fetch("https://swapi.dev/api/people/" + id);

    if (!res.ok) {
      throw new Error("Something happened getting your info");
    }

    const data = await res.json();
    return data;
  } catch (error) {}
}


//POST Endpoint Request Function//
//Typed 5th//
//async function getJSON(userid) {
//  try {
//    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" +userid);
//    if(!res.ok) {
//      throw new Error("Something happened getting your info");
//    }

//    const data = await res.json();
//    return data;
//  } catch (error) {

//  }
//}


//Renders content on the page//
//Render does not have to be "Async Function" it can just be a Function//
//Typed 4th//
function renderImg(src) {
  const breed = src.slice(30).split("/")[0];
  console.log(main2);

  const h2 = document.createElement("h2");
  h2.textContent = breed;
  main2.appendChild(h2);

  const url = document.createElement("url");
  url.textContent = src;
  main2.appendChild(url);

  const img = document.createElement("img");
  img.src = src;
  img.alt = breed;
  main2.appendChild(img);
}


//POST EXAMPLE RENDER FUNCTION//
function renderPost(postData){
    const message = document.getElementById("message");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const id = document.createElement("p");
    title.textContent = postData.title
    body.textContent = postData.body
    id.textContent = postData.id
}


//Main Function Runs all your calls//
//Typed 2nd//
async function main() {
  try {
    const dVader = await starWars(4);
    console.log(dVader);

    const obiWanKenobi = await starWars(10);
    console.log(obiWanKenobi);

    //POST Endpoint Request Function//
    //Typed 5th//
    //Sending a message data with a post request//
    const postData = {
      userid: 3,
      id: 22,
      title: "dolor sint quo a velit explicabo quia nam",
      body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
    };
    JSON.stringify(postData);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    };
    const jsonDataFromAPI = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options,
    );
    console.log(jsonDataFromAPI);
    console.log(options);
    //End of POST example//
    
    //Weather Array Output//
    const weatherConfig = {
      baseurl: "https://api.open-mateo.com/v1/forecast",
      latitude: "40.442",
      longitude: "-79.995",
    };

    const config = Object.entries(weatherConfig);
    console.log(config);
    //End of Weather Array Outout//

    btn.addEventListener("click", async () => {
      const picURL = "https://dog.ceo/api/breeds/image/random";
      const picOptions = { method: "GET" };

      const pic = await fetchData(picURL, picOptions);
      console.log(pic);
      renderImg(pic.message);
    });
  } catch (error) {}
  console.log("Server is Running...");
}
main();
