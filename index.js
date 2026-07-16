let home = document.querySelector(".scoreHome");
let guest = document.querySelector(".scoreGuest");

// Fonction générique
function addPoint(element, value) {
    element.textContent = parseInt(element.textContent) + value;

    // Animation pop
    element.classList.remove("pop");
    void element.offsetWidth; // force le reflow pour relancer l'animation
    element.classList.add("pop");
}

// Reset
function resetScore() {
    home.textContent = 0;
    guest.textContent = 0;
}