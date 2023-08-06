
const rollDice = document.querySelector("#roll-dice");
rollDice.addEventListener("click",() => {
  const indexGenerator = () => {
    let randomNum = (Math.random() * 6);
    let imgIndex = Math.floor(randomNum);
    return imgIndex;
  }

  const imgArray = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png',
  ]

  const player1Index = indexGenerator();
  const player2Index = indexGenerator();

  if (player1Index > player2Index) {
    document.querySelector("h1").innerHTML = "&#128079; Player 1 wins";
  } else if(player1Index == player2Index) {
    document.querySelector("h1").innerHTML = "&#128080; It's a tie &#128080;";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins &#128079;";
  }

  const player1Dice = document.querySelector(".img1").setAttribute("src", imgArray[player1Index]);
  const player2Dice = document.querySelector(".img2").setAttribute("src", imgArray[player2Index]);

})
