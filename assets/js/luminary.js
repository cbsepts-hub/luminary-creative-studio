const music = document.getElementById("bgMusic");
const button = document.getElementById("enterBtn");
const intro = document.getElementById("intro");

button.addEventListener("click", () => {

    music.play();

    intro.style.transition = "opacity 1.8s ease";
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
    }, 1800);

});const soundButton = document.getElementById("soundToggle");

soundButton.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        soundButton.innerHTML = "🔊";
    } else {
        music.pause();
        soundButton.innerHTML = "🔇";
    }

});