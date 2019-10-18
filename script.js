<<<<<<< HEAD
var tileImages = []; // main container for game images
var tileArray = [];
var tileFlippedOver = [];
var cardFlipped = -1;
var timer = '';
var playLockout = false;
var gamePlay = false; // controls if we rebuild the board restart

var startButton = document.getElementById('start');
var gameBoard = document.getElementById('gameboard');
var message = document.getElementById('message');

//event listens
startButton.addEventListener('click', startGame);

function startGame() {
  cardFlipped = -1;
  playLockout = false;
  startButton.style.display = 'none';
  if (!gamePlay) {
    gamePlay = true;
    buildArray();
    tileArray = tileImages.concat(tileImages);
    shuffleArray(tileArray);
    buildBoard();
    message.innerHTML = "let's play buddy";
  }
}

function buildArray() {
  for (var x = 1; x < 4; x++) {
    tileImages.push(x + '.jpg');
  }
}
function buildBoard() {
  var html = "";
  for (var x = 0; x <= (tileArray.length - 1); x++) {
    html += '<div class="gameTile"><div class="gameTile">';
    html += '<img id="cardz' + x + '" src="images/back.jpg" onclick="pickCard(' + x + ',this)" class="flipImage"></div></div>';
  }
  gameBoard.innerHTML = html;
}

function pickCard(tileIndex, t) {
  if (!isinArray(t.id, tileFlippedOver) && !playLockout) {
    if (cardFlipped >= 0) {
      cardFlip(t, tileIndex);
      playLockout = true;
      if (checkSrc(tileFlippedOver[tileFlippedOver.length - 1]) == checkSrc(tileFlippedOver[tileFlippedOver.length - 2])) {
        message.innerHTML = "Match Found.  Click more tiles";
        playLockout = false;
        cardFlipped = -1;
        if (tileFlippedOver.length == tileArray.length) {
          gameover();
        }
      } else {
        message.innerHTML = "No Match";
        timer = setInterval(hideCard, 1000);
      }
    } else {
      cardFlipped = tileIndex;
      cardFlip(t, tileIndex);
    }
  } else {
    message.innerHTML = "Not clickable";
  }
}

function hideCard() {
  for (var x = 0; x < 2; x++) {
    var vid = tileFlippedOver.pop();
    document.getElementById(vid).src = "images/back.jpg";
  }
  clearInterval(timer);
  playLockout = false;
  cardFlipped = -1;
  message.innerHTML = "Click any tile";
}

function gameover() {
  startButton.style.display = 'block';
  message.innerHTML = "Play again";
  gamePlay = false;
  tileImages = [];
  tileFlippedOver = [];
}

function isinArray(v, array) {
  return array.indexOf(v) > -1;
}

function cardFlip(t, ti) {
  t.src = "images/" + tileArray[ti];
  tileFlippedOver.push(t.id);
}

function checkSrc(v) {
  var v = document.getElementById(v).src;
  return v;
}

function shuffleArray(array) {
  for (var x = array.length - 1; x > 0; x--) {
    var holder = Math.floor(Math.random() * (x + 1));
    var itemValue = array[x];
    array[x] = array[holder];
    array[holder] = itemValue;
  }
  return array;
}
=======
// const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var gamePlay = false;
var tileArray = [];
var tileImages = [];
var playLockout = false;
var startButton = getElementById('start');
var message = getElementById('message');
var gameBoard = getElementById('gameBoard')

startButton.addEventListener('click', start)

function start(){
    playLockout = false;
    startButton.style.display = 'none';
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
  
   for (; i > 0; i--){
    holder = Math.floor(Math.random() * 12);
    itemValue = array[i];
    array[i] = array[holder];
    array[holder] = itemValue;
   }
   return array;
}

function buildArray() {
    for (let x = 1; x < 7; x++) {
      tileImages.push(x + '.jpeg');
    }
  }
  function buildBoard() {
    var html = "";
    for (let x = 0; x <= (tileArray.length - 1); x++) {
      html += '<div class="gameTile"><div class="gameTile">';
      html += '<img id="cardz' + x + '" src="docs/img/back.jpeg" onclick="pickCard(' + x + ',this)" class="flipImage"></div></div>';
    }
    gameBoard.innerHTML = html;
  }
  

cards.forEach(card => card.addEventListener("click", flipCard));


>>>>>>> 7dd5e3431b030978db0b6ab1b4e007d9e831d508
