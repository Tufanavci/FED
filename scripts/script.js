// JavaScript Document

// Hamburger icoon animatoe (overgenomen van DLO) 

var eersteStreepjesButton = document.querySelector("section.streepjes li:nth-of-type(1) button");
eersteStreepjesButton.addEventListener("click", eersteStreepjesButtonKlik);
function eersteStreepjesButtonKlik() {
  eersteStreepjesButton.classList.toggle("menuOpen");
}

var hamburger = document.querySelector(".streepjes li");

var menu = document.querySelector(".streepjes nav");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("dropdownmenu");
});

console.log(menu);
console.log(hamburger)


