console.log("Game.JS Has been loaded")

var gameboardSpaces = []

var playButton = document.querySelector("#playButton")
var optionsButton = document.querySelector("#optionsButton")
var gameBoard = document.querySelector(".gameboard")
var turn = "player"

var player = "X"
var opp = "O"

playButton.addEventListener("click", function(){play()})
optionsButton.addEventListener("click", function(){options()})

function play() {
  console.log("Play button Hit.")
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
  return false
    
}
}

function checkWin(turn) {
  if (turn == "player") {
    console.log(turn + " Win check")
    checkDiags(turn)
  } else{
    if (turn == "opp") {
      console.log("Now for this win check")
    }
  }

  }

  function checkRows(turn) {

    
  }

  function checkColumns(turn) {

  }
  
  function checkDiags(turn) {

  }