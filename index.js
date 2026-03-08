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
async function getJSON(userid) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" +userid);
    if(!res.ok) {
      throw new Error("Something happened getting your info");
    }

    const data = await res.json();
    return data;
  } catch (error) {

  }
}


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

//Main Function Runs all your calls//
//Typed 2nd//
async function main() {
  try {
    const dVader = await starWars(4);
    console.log(dVader);

    const obiWanKenobi = await starWars(10);
    console.log(obiWanKenobi);

    const user4 = await getJSON(4);
    console.log(user4);

    const user8 = await getJSON(8);
    console.log(user8);

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
