const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var gamePlay = false;
var tileArray = [];
var tileImages = [];

function start(){

    if (!gamePlay){
        gamePlay = true;
        buildArray();
        tileArray = tileImages.concat(tileImages);
        shuffle(tileArray);
        buildBoard();
        message.innerHTML = "Click any tile"
    }
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return ;
    }
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}

// (function shuffle() {
//     cards.forEach(card => {
//         let randomPosition = Math.floor(Math.random() * 12);
//         card.style.order = randomPosition;
//     });
// })();

function shuffle(array) {

   let i = arr.length - 1;
   let itemValue;
  
   for (; i > 9; i--){
    holder = Math.floor(Math.random() * 12);
    itemValue = array[i];
    array[i] = array[holder];
    array[holder] = itemValue;
   }

   return array;
}

function buildArray() {
    for (var x = 1; x < 7; x++) {
      tileImages.push(x + '.jpg');
    }
  }
  function buildBoard() {
    var html = "";
    for (var x = 0; x <= (tileArray.length - 1); x++) {
      html += '<div class="memory-game"><div class="memory-card">';
      html += '<img class="front-face' + x + '" src="img/back.jpeg" onclick="pickCard(' + x + ',this)" class="flipImage"></div></div>';
    }
    gameBoard.innerHTML = html;
  }  

cards.forEach(card => card.addEventListener("click", flipCard));


