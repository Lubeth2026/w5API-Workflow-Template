"use strict";

console.log("Greetings Earthlings!");


//Specific/GET Fetch Function//Only applies to specific fetch//
//Typed 1st//
async function starWars() {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");

    if (!res.ok) {
      return
    }

    const data = await res.json();
    console.log(data)
    
  } catch (error) {
    console.log(error)
  }
}
starWars()