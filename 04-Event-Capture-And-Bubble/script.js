"use strict";

// Event Bubbling

/*
const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", function () {
  console.log("grand parent div was clicked");
});

parent.addEventListener("click", function () {
  console.log("parent div was  clicked");
});

child.addEventListener("click", function () {
  console.log("child div was clicked");
});

*/

//---------------------
// Event Capturing
//-------------------

const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener(
  "click",
  function () {
    console.log("grand parent div was clicked");
  },
  { capture: true }
);

parent.addEventListener(
  "click",
  function () {
    console.log("parent div was  clicked");
  },
  { capture: true }
);

child.addEventListener(
  "click",
  function () {
    console.log("child div was clicked");
  },
  { capture: true }
);
