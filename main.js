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
