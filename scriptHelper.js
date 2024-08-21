// Write your helper functions here!
require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML=
        `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
}

function validateInput(testInput) {
    console.log('Validating input:', testInput);

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (
        validateInput(pilot) === "Empty" &&
        validateInput(copilot) === "Empty" &&
        validateInput(fuelLevel) === "Empty" &&
        validateInput(cargoLevel) === "Empty"
    ) {
        alert("All fields are required!");
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Information Required";
        list.style.visibility = "hidden";
    } else if (validateInput(pilot) === "Is a Number") {
        alert("Please enter a name for 'Pilot'");
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Pilot name should be a String";
        list.style.visibility = "hidden";
    } else if (validateInput(copilot) === "Is a Number") {
        alert("Please enter a name for 'Co-Pilot'");
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Co -Pilot name should be a String";
        list.style.visibility = "hidden";
    } else if (validateInput(fuelLevel) === "Not a Number") {
        alert("Please enter a number for 'Fuel Level'");
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Co -Pilot name should be a Number";
        list.style.visibility = "hidden";
    } else if (validateInput(cargoLevel) === "Not a Number") {
        alert("Please enter a number for 'Cargo Mass'");
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Cargo Mass should be a Number";
        list.style.visibility = "hidden";
    } else if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level too low for launch";
    } else if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    } else {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch.";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;