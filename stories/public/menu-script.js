const menuButton = document.querySelector("a#menu-icon");
const menuBox = document.querySelector(".menu-box");
const overlay = document.querySelector(".menu-box-overlay");
const notification = document.querySelector(".notification-menu");



let isMenuOpen = false;



function openMenu() {
  menuBox.style.display = "block";
  menuButton.classList.add("close");
  menuBox.classList.add("active");
  isMenuOpen = true;
  menuButton.style.transform = "scale(1)";
  overlay.style.display = "block";
  updatePointerEvents("auto");
  if (notification) {
    notification.style.display = "none";
  }

  if (window.innerWidth <= 768) {
    // ta bort denna och raden nedanför om jag vi vill kunna skrolla oi mobil när menyn är öppen
    document.body.style.overflow = "hidden";
    menuButton.style.transform = "scale(1.5)";

  }
}

function closeMenu() {
  menuBox.style.display = "none";
  menuButton.classList.remove("close");
  menuBox.classList.remove("active");
  isMenuOpen = false;
  menuButton.style.transform = "scale(1.4)";
  overlay.style.display = "none";
  updatePointerEvents("none");
  history.replaceState(null, null, window.location.pathname);
  if (notification) {
    notification.style.display = "none";

  }
  if (window.innerWidth <= 768) {
    // ta bort denna och raden nedanför om jag vi vill kunna skrolla oi mobil när menyn är öppen
    document.body.style.overflow = "";
  }
}

function updatePointerEvents(value) {
  const menuItems = menuBox.querySelectorAll("li, a");
  menuItems.forEach((item) => {
    item.style.pointerEvents = value;
  });
}

menuButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach(function (menuLink) {
    if (menuLink.href === window.location.href) {
      menuLink
        .querySelector(".menu-object")
        .classList.add("active-menu-object");
    } else {
      menuLink.parentNode.classList.add("inactive");

    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hashFragment = window.location.hash;

  if (hashFragment === "#menu") {
    openMenu();
  }
});

document.addEventListener("click", function (e) {
  if (
    !menuBox.contains(e.target) &&
    !menuButton.contains(e.target) &&
    isMenuOpen
  ) {
    closeMenu();
  }
});

menuButton.addEventListener('mouseover', function (e) {
  if (isMenuOpen === false) {
    menuButton.style.backgroundColor = 'black';
  } 
});

menuButton.addEventListener('mouseout', function (e) {
  if (isMenuOpen === false) {
    menuButton.style.backgroundColor = ''; // Set to original background color
  }
});

menuButton.addEventListener('click', function (e) {
  menuButton.style.backgroundColor = ''; // Reset on click as well
});
// Någlurnda fungerande 19:59 10 nov.

var menuObjects = document.querySelectorAll(".menu-object a");

for (var i = 0; i < menuObjects.length; i++) {
  if (menuObjects[i].href == document.location.href) {
    menuObjects[i].parentNode.classList.add("active");
    menuObjects[i].addEventListener("click", function (event) {
      event.preventDefault();
    });
  } else if (
    menuObjects[i].getAttribute("href") == "index.html" &&
    (document.location.pathname == "/" ||
      document.location.pathname == "/index.html")
  ) {
    menuObjects[i].parentNode.classList.add("active");
    menuObjects[i].addEventListener("click", function (event) {
      event.preventDefault();
    });
  }
}

// La till ovan script för att disable ability to click on active menu items.

window.addEventListener("DOMContentLoaded", (event) => {
  fetch("html/menu.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("master-menu").innerHTML = data;
    });
});

window.addEventListener("load", (event) => {
  const smallLogoImage = document.querySelector(".small-logo img");
  smallLogoImage.style.display = "block";
});
