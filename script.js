const perso = document.getElementById("perso");
const jumpsound = document.querySelector("#jumpsound");

let positionX = 100; // position de départ
let enSaut = false; // le saut désactivé par défaut

document.addEventListener("keyDown", () => {
  switch (event.code) {
    case "ArrowRight":
      positionX += 15;
      perso.style.left = positionX + "px";
      break;

    case "ArrowLeft":
      positionX -= 15;
      perso.style.left = positionX + "px";
      break;

    case "ArrowUp":
      if (!enSaut) {
        enSaut = true;
        jumpsound.currentTime = 0;
        jumpsound.play();
        perso.style.bottom = "160px";
        setTimeout(() => {
          perso.style.bottom = "60px";
          setTimeout(() => (enSaut = false), 100);
        }, 100);
      }
      break;
    default:
      //aucune action pour les autres touche

      break;
  }
});

/* snowFlake */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".snow-container");
  const numFlakes = 150; //Nombre de flocons

  for (let i = 0; i < numFlakes; i++) {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.textContent = "❄"; // Symbole flocon

    // Randomisation pour variété

    const left = Math.random() * 100; //Position horizontale (%)
    const size = Math.random() * 1 + 0.5; // Taille entre 0.5 et 1.5rem
    const duration = Math.random() * 10 + 5; // Délai chute entre 5 et 15s
    const delay = Math.random() * 5; // Délai départ pour étaler
    const sway = Math.random() * 20 - 10; // Oscilation légère

    flake.style.left = `${left}%`;
    flake.style.fontSize = `${size}em`;
    flake.style.animationDuration = `${duration}s`;
    flake.style.animationDelay = `${delay}s`;
    flake.style.animationTimingFunction = "linear";
    flake.style.transform = `translateX(${sway}px)`;

    container.appendChild(flake);
  }
});
