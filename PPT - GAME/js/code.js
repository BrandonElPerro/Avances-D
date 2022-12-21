let attackPlayer;
let attackEnemy;
let healthPlayer = 3;
let healthEnemy = 3;
let wins = 0;
let loses = 0;

const starter = document.getElementById("starter");
const combat = document.getElementById("combat");
const reset = document.getElementById("reset");

const playButton = document.getElementById("play-button");
const resetButton = document.getElementById("reset-button");
const choseButton = document.getElementById("chose-button");

const inputStone = document.getElementById("stone-radio");
const inputPaper = document.getElementById("paper-radio");
const inputScissor = document.getElementById("scissor-radio");

const spanHealthPlayer = document.getElementById("span-vidas-jugador");
const spanHealthEnemy = document.getElementById("span-vidas-enemigo");
const spanWins = document.getElementById("wins");
const spanLoses = document.getElementById("loses");

const resultPlayer = document.getElementById("result-player");
const resultEnemy = document.getElementById("result-enemy");
const resultCombat = document.getElementById("result-combat");
const resultFinal = document.getElementById("result-final");

function startGame(){
    playButton.addEventListener("click", playEvent);
    resetButton.addEventListener("click", resetEvent);
    choseButton.addEventListener("click", choseEvent);

    resetButton.disabled = true;
    choseButton.disabled = true;

    spanWins.innerHTML = wins;
    spanLoses.innerHTML = loses;

    combat.style.display = "none";
    reset.style.display = "none";
}

function playEvent(){
    spanHealthPlayer.innerHTML = healthPlayer;
    spanHealthEnemy.innerHTML = healthEnemy;

    choseButton.disabled = false;

    starter.style.display = "none";
    combat.style.display = "flex";
}

function resetEvent(){
    location.reload();
}

function choseEvent(){
    if (inputStone.checked){
        attackPlayer = "PIEDRA";
    }else if (inputPaper.checked){
        attackPlayer = "PAPEL";
    }else if (inputScissor.checked){
        attackPlayer = "TIJERA";
    }else{
        alert("Elige un ataque!");
        resetEvent();
    }

    attackEnemyEvent();
    resultPlayer.innerHTML = attackPlayer;
}

function attackEnemyEvent(){
    let num = random(1, 3);

    if (num == 1){
        attackEnemy = "PIEDRA";
    }else if (num == 2){
        attackEnemy = "PAPEL";
    }else{
        attackEnemy = "TIJERA";
    }

    resultEnemy.innerHTML = attackEnemy;
    combatEvent();
}

function combatEvent(){
    if (attackPlayer == attackEnemy){
        resultFinal.innerHTML = "Empataste :o";
    } else if (attackPlayer == "PIEDRA" && attackEnemy == "TIJERA"){
        resultCombat.innerHTML = "GANASTE! :D";
        healthEnemy --;
        wins ++;
    } else if (attackPlayer == "PAPEL" && attackEnemy == "PIEDRA"){
        resultCombat.innerHTML = "GANASTE! :)";
        healthEnemy --;
        wins ++;
    } else if (attackPlayer == "TIJERA" && attackEnemy == "PAPEL"){
        resultCombat.innerHTML = "GANASTE! :3";
    }else{
        resultCombat.innerHTML = "PERDISTE! D:";
        healthPlayer --;
        loses ++;
    }

    checkLives();
    spanHealthPlayer.innerHTML = healthPlayer;
    spanHealthEnemy.innerHTML = healthEnemy;
    spanWins.innerHTML = wins;
    spanLoses.innerHTML = loses;
}

function checkLives(){
    if (healthEnemy == 0){
        resultFinal.innerHTML = "GANASTE LA PARTIDA CAMPEÓN! >:D";
    }else if (healthPlayer == 0){
        resultFinal.innerHTML = "PERDISTE LA PARTIDA! D:";
    }

    if (healthPlayer == 0 || healthEnemy == 0){
        choseButton.disabled = true;
        resetButton.disabled = false;

        combat.style.display = "none";
        reset.style.display = "flex";
    }
}

function random(min, max){
    return Math.floor(Math.random() * (min - max + 1) + min);
}

window.addEventListener("load", startGame);