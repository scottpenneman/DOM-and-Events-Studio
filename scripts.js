// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    document.getElementById("takeoff").addEventListener("click", initiateTakeoff);
    document.getElementById("landing").addEventListener("click", initiateLanding);
    document.getElementById("missionAbort").addEventListener("click", initiateAbort);
    document.getElementById("up").addEventListener("click", up);
    document.getElementById("down").addEventListener("click", down);
    document.getElementById("right").addEventListener("click", right);
    document.getElementById("left").addEventListener("click", left);
});

let startingHeight = 0;
let altitudeChange = 10000;
let currentHeight = 0;

function initiateTakeoff(event) {
    if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.background = "blue";
        currentHeight = startingHeight + altitudeChange;
        document.getElementById("spaceShuttleHeight").innerHTML = currentHeight;
    };
};

function initiateLanding(event) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.background = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = startingHeight;
};

function initiateAbort(event) {
    if (window.confirm("Confirm that you want to abort the mission.")) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = startingHeight;
    };
};

// Declaring verticalPixelsMoved variable for shuttle movement up and down
let verticalPixelsMoved = 0;

function up(event) {
    currentHeight += altitudeChange;
    document.getElementById("spaceShuttleHeight").innerHTML = currentHeight;
    verticalPixelsMoved -= 10;
    document.getElementById("rocket").style.top = verticalPixelsMoved + "px";
};

function down(event) {
    currentHeight -= altitudeChange;
    document.getElementById("spaceShuttleHeight").innerHTML = currentHeight;
    verticalPixelsMoved += 10;
    document.getElementById("rocket").style.top = verticalPixelsMoved + "px";
}

// Declaring horizontalPixelsMoved variable for shuttle movement right and left
let horizontalPixelsMoved = 0;

function right(event) {
    horizontalPixelsMoved += 10;
    document.getElementById("rocket").style.left = horizontalPixelsMoved + "px";
}

function left(event) {
    horizontalPixelsMoved -= 10;
    document.getElementById("rocket").style.left = horizontalPixelsMoved + "px";
}