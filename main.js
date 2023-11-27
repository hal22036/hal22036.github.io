import U, { printName as printUserName, printAge } from "/user.js";

const user = new U("Bob", 11);
console.log(user);
printUserName(user);
printAge(user);

// document.addEventListener("DOMContentLoaded", function () {
//   const formElem = document.getElementById("formElem");

//   formElem.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Collect form data
//     const formData = new FormData(formElem);

//     // Append the current date to the form data
//     const currentDate = new Date().toISOString();
//     formData.append("currentDate", currentDate);

//     // Convert form data to a plain JavaScript object
//     const formDataObject = {};
//     formData.forEach((value, key) => {
//       formDataObject[key] = value;
//     });

//     // Output form data to console
//     console.log("Form Data:", formDataObject);
//   });
// });

// const myElement = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     myElement.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   myElement.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

let isSmile = true; // Variable to track the current face

function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    if (isSmile) {
      drawSmile(ctx);
    } else {
      drawFrown(ctx);
    }
  }
}

function drawSmile(ctx) {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
  ctx.stroke();
}

function drawFrown(ctx) {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 105);
  ctx.arc(75, 110, 35, 0, Math.PI, true); // Mouth (counterclockwise for a frown)
  ctx.moveTo(65, 65); // Adjusted y-coordinate for the left eye
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
  ctx.moveTo(95, 65); // Adjusted y-coordinate for the right eye
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
  ctx.stroke();
}

canvas.addEventListener("click", function () {
  isSmile = !isSmile; // Toggle between smile and frown
  draw(); // Redraw the canvas with the updated face
});

// Initial drawing
drawSmile();
