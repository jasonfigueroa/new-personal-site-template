function toggleResponsiveNav() {
    let navbar = document.getElementById("myTopnav");
    if (navbar.className === "topnav") {
        navbar.className += " responsive";
    } else {
        navbar.className = "topnav";
    }
    // return false;
}

// let menuIcon = document.getElementById('menuIcon');

// menuIcon.onclick = toggleResponsiveNav;