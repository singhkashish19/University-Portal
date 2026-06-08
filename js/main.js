var navLinks = document.getElementById("navLinks");

function showmenu() {
    if (navLinks) {
        navLinks.style.right = "0";
    }
}

function hidemenu() {
    if (navLinks) {
        navLinks.style.right = "-200px";
    }
}

function sendMail(message = "Thank you for your submission!") {
    alert(message);
}
