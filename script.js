// Write your JavaScript code here!

window.addEventListener("load", function() {
    let launchForm = document.getElementById("launchForm");
    launchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let list = document.querySelector("#faultyItems");
        formSubmission(
            document,
            list,
            pilot.value,
            copilot.value,
            fuelLevel.value,
            cargoMass.value
        );

    });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet=pickPlanet(listedPlanets);
        let name = randomPlanet.name;
        let diameter = randomPlanet.diameter;
        let star = randomPlanet.star;
        let distance = randomPlanet.distance;
        let moons = randomPlanet.moons;
        let imageUrl = randomPlanet.image;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })



});