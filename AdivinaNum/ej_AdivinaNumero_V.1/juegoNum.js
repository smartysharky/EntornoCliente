let rightAwns = 0;
let wrongAwns = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function checkNums(){
  let number = getRandomInt(9);
  let guess = document.getElementById("guess").value;

  document.getElementById("awnser").innerHTML = number;

  if (number == guess){
    rightAwns++;
  }else{
    wrongAwns++;
  }

  document.getElementById("right").innerHTML = rightAwns;
  document.getElementById("wrong").innerHTML = wrongAwns;
}