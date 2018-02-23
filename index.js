(function() {
  'use strict';
  let lights = {
    "Stop": document.getElementById('stopLight'),
    "Slow": document.getElementById('slowLight'),
    "Go": document.getElementById('goLight'),
  }

  let buttons = {
    "Stop": document.getElementById('stopButton'),
    "Slow": document.getElementById('slowButton'),
    "Go": document.getElementById('goButton'),
  }

  let controls = document.getElementById('controls');
  let trafficLight = document.getElementById('traffic-light');

  controls.addEventListener('click', function(ev){
    let lightBehavior = ev.target.innerText; // fills in if you clicked on button.
    for (var item in lights) {
      if (lights.hasOwnProperty(item)) { // if property is filled
        lights[item].setAttribute('class',"bulb"); //
      }
    }
    let lightClass = lightBehavior.toLowerCase();
    lights[lightBehavior].classList.add(lightClass)
  })
  // YOUR CODE HERE
}
) ();

// // controls
// let stopButton = document.getElementById('stopButton');
// let slowButton = document.getElementById('slowButton');
// let goButton = document.getElementById('goButton');
//
// // bulb colors
// let redBulb = document.getElementById('stopLight');
// let yellowBulb = document.getElementById('slowLight');
// let greenBulb = document.getElementById('goLight');
//
// // do I program 3 event listne
//
// stopButton.onclick = function() {
//
// }

//
