"use strict";

console.log("Greetings Earthlings!");


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
    const res = await fetch("https://swapi.dev/api/people/" +id);

    if (!res.ok) {
      throw new Error("Something happened getting your info..");
    }

    const data = await res.json();
    return data

  } catch (error) {
    console.log(error)
  }
}


//Renders content on the page//
//Render does not have to be "Async Function" it can just be a Function//
//Typed 4th//
function renderImg(src){
    console.log(src)
}


//Main Function Runs all your calls//
//Typed 2nd//
async function main() {
  try {
    const dVader = await starWars(4);
    console.log(dVader);

    const obiWanKenobi = await starWars(10);
    console.log(obiWanKenobi);

   
      const picURL = "https://dog.ceo/api/breeds/image/random";
      const picOptions = { method: "GET" };

      const pic = await fetchData(picURL, picOptions);
      console.log(pic.message);
     
  } catch (error) {}
  console.log("Server is Running...");
}
main();
