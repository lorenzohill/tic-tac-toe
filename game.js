console.log("Game.JS Has been loaded")

var gameboardSpaces = []

var playButton = document.querySelector("#playButton")
var optionsButton = document.querySelector("#optionsButton")
var gameBoard = document.querySelector(".gameboard")
var turn = "player"

var player = "X"
var opp = "O"

var turnNum = 0
var gameOver = false

var playerOne
var playerTwo

playButton.addEventListener("click", function(){play()})
optionsButton.addEventListener("click", function(){options()})

function play() {
  console.log("Play button Hit.")
  playerOne = prompt("Who is player number one?")
  playerTwo = prompt("Who is player number two?")
  playButton.classList.add("hide")
  turn = "player"
  for (let index = 0; index < 9; index++) {
    let space = document.createElement("div")
    space.innerHTML= ""
    space.classList.add("gamesquare")
    space.id = index 
    space.addEventListener("click", function(){button(index)})
    gameBoard.appendChild(space)
    gameboardSpaces.push(space)
    
  }
}

function options() {
  console.log("Options button hit.")
  
}

function button(index) {
  console.log(index)

  if (checkValid(index) == false) {
    return
  }else{
    turnNum++ 
    if (turn == "player") {
      let space = document.getElementById(index)
      space.innerHTML = "X"
      console.log(space)
      console.log("Player placed marker in " + (index + 1))
      checkWin(turn)
      turn = "opp"
    }
    else { 
      if (turn == "opp"){
        let space = document.getElementById(index)
        space.innerHTML = "O"
        console.log("Opp placed marker in " + (index + 1))
        checkWin(turn)
        turn = "player"
    }
  }
  }


}

function checkValid(index) {
  var index = document.getElementById(index).innerHTML
  if (index == "X" || index == "O") {
  console.log("ERROR")
  alert("You can't place it there!")
  return false
    
}
}

function checkWin(turn) {
  if (turn == "player") {
    console.log(turn + " Win check")
    console.log(gameboardSpaces[0].id)
    checkRows("X")
    checkColumns("X")
    checkDiags("X")
    if (gameOver == true){
      processWinner(playerOne)
    } else if (gameOver == false){
      checkCat()
    }
  } else{
    if (turn == "opp") {
      checkRows("O")
      checkColumns("O")
      checkDiags("O")
      if (gameOver == true){
        processWinner(playerTwo)
      }else if (gameOver == false){
        checkCat()
      }
    }
  }

  }

  function checkRows(check) {
    if (gameboardSpaces[0].innerHTML == check){
      if (gameboardSpaces[1].innerHTML == check) {
        if (gameboardSpaces[2].innerHTML == check) {
          gameOver = true
        }
      }
    }
    if (gameboardSpaces[3].innerHTML == check){
      if (gameboardSpaces[4].innerHTML == check) {
        if (gameboardSpaces[5].innerHTML == check) {
          gameOver = true
        }
      }
    }
    if (gameboardSpaces[6].innerHTML == check){
      if (gameboardSpaces[7].innerHTML == check) {
        if (gameboardSpaces[8].innerHTML == check) {
          gameOver = true
        }
      }
    }
  }

  function checkColumns(check) {
    if (gameboardSpaces[0].innerHTML == check){
      if (gameboardSpaces[3].innerHTML == check) {
        if (gameboardSpaces[6].innerHTML == check) {
          gameOver = true
        }
      }
    } 
     if (gameboardSpaces[1].innerHTML == check){
      if (gameboardSpaces[4].innerHTML == check) {
        if (gameboardSpaces[7].innerHTML == check) {
          gameOver = true
        }
      }
    } 
     if (gameboardSpaces[2].innerHTML == check){
      if (gameboardSpaces[5].innerHTML == check) {
        if (gameboardSpaces[8].innerHTML == check) {
          gameOver = true
        }
      }
    }
  }
  
  function checkDiags(check) {
    if (gameboardSpaces[0].innerHTML == check){
      if (gameboardSpaces[4].innerHTML == check) {
        if (gameboardSpaces[8].innerHTML == check) {
          gameOver = true
        }
      }
    }
    if (gameboardSpaces[2].innerHTML == check){
      if (gameboardSpaces[4].innerHTML == check) {
        if (gameboardSpaces[6].innerHTML == check) {
          gameOver = true
        }
      }
    }
  }

  function checkCat() {
    if (gameOver == false && turnNum == 9){
      console.log("Tie Game")
      processWinner("Nobody")
      gameOver = true
    }
  }

  function processWinner(player) {
    let gameSpaces = document.querySelectorAll(".gamesquare")
    gameSpaces.forEach(element => {
      var new_element = element.cloneNode(true);
      element.parentNode.replaceChild(new_element, element);
    });
    let winner = document.createElement("h1")
    winner.id = "winner"
    winner.innerHTML = player + " has won the game"
    document.body.querySelector(".main").appendChild(winner)
    let reset = document.createElement("button")
    reset.innerHTML = "Reset"
    reset.classList.add("reset")
    reset.addEventListener("click", function(){startOver()})
    document.body.appendChild(reset)

    }
function startOver() {
  let gameSpaces = document.querySelectorAll(".gamesquare")
    gameSpaces.forEach(element => {
      element.remove()
    });
    document.querySelector("#winner").remove()
    document.querySelector(".reset").remove()
    gameOver = false
    gameboardSpaces = []
    turn = "player"
    turnNum = 0
    play()
}
