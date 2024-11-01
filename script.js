let score = 0;
let highestScore = JSON.parse(localStorage.getItem("highestScore")) || 0;

// Zvuk "Sorry jako"
const sorrySound = document.getElementById("sorry-sound");
let soundEnabled = true; // Stav pro ovládání zvuku

// Funkce pro kliknutí na obrázek
document.getElementById("klikaci-obrazek").onclick = function() {
    score++;
    document.getElementById("score").innerText = score;

    // Přehraje zvuk "Sorry jako" jen pokud je povolený a není již přehráván
    if (soundEnabled) {
        if (sorrySound.paused) { // Pokud zvuk není v přehrávání
            sorrySound.currentTime = 0; // Aby se zvuk přehrál od začátku
            sorrySound.play();
        }
    }

    // Pokud je aktuální skóre vyšší než nejvyšší skóre, aktualizujeme nejvyšší skóre
    if (score > highestScore) {
        highestScore = score;
        localStorage.setItem("highestScore", JSON.stringify(highestScore));
    }

    // Aktualizace leaderboardu
    updateLeaderboard();
};

// Funkce pro přepínání zvuku
document.getElementById("mute-container").onclick = function() {
    soundEnabled = !soundEnabled; // Přepni stav zvuku
    document.getElementById("mute-icon").src = soundEnabled ? "https://i.imgur.com/Ov2Tblm.png" : "https://i.imgur.com/Ov2Tblm.png"; // Změň ikonu
};

// Resetování skóre
function resetScore() {
    score = 0;
    document.getElementById("score").innerText = score;
}

// Funkce pro aktualizaci leaderboardu
function updateLeaderboard() {
    const leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = ""; // Vymaže staré záznamy

    const li = document.createElement("li");
    li.innerText = `Nejvyšší skóre: ${highestScore}`;
    leaderboardElement.appendChild(li);
}

// Načti leaderboard při načtení stránky
updateLeaderboard();
