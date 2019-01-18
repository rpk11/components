/* Get the element which represent the menu icon */
var menuIconElements = document.getElementsByClassName('menuIconElements');

/* Get the menu open icon to add a event listener for a click */
var menuIcon = document.getElementById('menuIcon');
menuIcon.addEventListener('click', checkMenuOpen)

/* Get the navBar element and the list with the links */
var navBar = document.getElementById('nav-bar');
var navLinks = document.getElementById('links');


var isMenuOpen = false;

function checkMenuOpen() {
    if (isMenuOpen == false) {
        openNavBar();
    } else {
        closeNavBar();
    }
}

/* Open the menu by setting the background width something greater than zero and displaying the list with the links */
function openNavBar() {
    navBar.style.width = "250px";
    navLinks.style.display = "block";
    console.log(menuIconElements);
    for (i = 0; i < menuIconElements.length; i++) {
        menuIconElements[i].style.stroke = "#fff";
    }
    isMenuOpen = true;
}

/* Close the menu by setting the element width to zero and hiding the list with the links */
function closeNavBar() {
    navBar.style.width = "0px";
    navLinks.style.display = "none";
    for (i = 0; i < menuIconElements.length; i++) {
        menuIconElements[i].style.stroke = "#000";
    }
    isMenuOpen = false;
}