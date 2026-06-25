const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameOverScreen = document.getElementById("gameOver");

let playerX = 20;
let playerY = 20;

let enemyX = 500;
let enemyY = 300;

let gameRunning = true;

const speed = 10;
const enemySpeed = 2;

// Movimiento del jugador
document.addEventListener("keydown", (e) => {

    if (!gameRunning) return;

    if (e.key === "ArrowUp" || e.key === "w") playerY -= speed;
    if (e.key === "ArrowDown" || e.key === "s") playerY += speed;
    if (e.key === "ArrowLeft" || e.key === "a") playerX -= speed;
    if (e.key === "ArrowRight" || e.key === "d") playerX += speed;

    playerX = Math.max(0, Math.min(playerX, 568));
    playerY = Math.max(0, Math.min(playerY, 368));

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
});

// IA del enemigo
function moverEnemigo() {

    if (!gameRunning) return;

    if (enemyX < playerX) enemyX += enemySpeed;
    if (enemyX > playerX) enemyX -= enemySpeed;

    if (enemyY < playerY) enemyY += enemySpeed;
    if (enemyY > playerY) enemyY -= enemySpeed;

    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";

    verificarColision();
}

// Colisión
function verificarColision() {

    if (
        playerX < enemyX + 32 &&
        playerX + 32 > enemyX &&
        playerY < enemyY + 32 &&
        playerY + 32 > enemyY
    ) {
        gameRunning = false;
        gameOverScreen.style.display = "flex";
    }
}

// Reiniciar juego
function reiniciar() {

    playerX = 20;
    playerY = 20;

    enemyX = 500;
    enemyY = 300;

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";

    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";

    gameOverScreen.style.display = "none";
    gameRunning = true;
}

setInterval(moverEnemigo, 20);