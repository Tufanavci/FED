// JavaScript Document

// Hamburger icoon animatoe (overgenomen van DLO) 

var eersteStreepjesButton = document.querySelector("section.streepjes li:nth-of-type(1) button");
eersteStreepjesButton.addEventListener("click", eersteStreepjesButtonKlik);
function eersteStreepjesButtonKlik() {
  eersteStreepjesButton.classList.toggle("menuOpen")};

var hamburger = document.querySelector(".streepjes li");

var menu = document.querySelector(".streepjes nav");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("dropdownmenu");
});

console.log(menu);
console.log(hamburger);


// var streepjescarousel = document.querySelector("main>section:nth-of-type(1)>div a");

// streepjescarousel.addEventListener("click", function() {
//   streepjescarousel.classList.toggle("anderkleur");
// });

// console.log(streepjescarousel);




var kruisje = document.querySelector("header section section:nth-of-type(3) section > button:nth-of-type(1)");
kruisje.addEventListener("click", venstersluiten);

function venstersluiten() {
    kruisje.classList.toggle("sluiten");
}

var popup = document.querySelector("header section section:nth-of-type(3) > section");
var profiel = document.querySelector("header section section:nth-of-type(3) > button:nth-of-type(1)");


kruisje.addEventListener("click", function() {
    popup.classList.toggle("profielvenster");
  });

console.log(kruisje);
console.log(popup);
console.log(profiel);


profiel.addEventListener("click", function() {
    popup.classList.toggle("profielvenster");
  });
