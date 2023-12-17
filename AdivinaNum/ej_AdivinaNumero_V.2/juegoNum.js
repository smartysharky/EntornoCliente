function generateNums() {
  let guess = document.getElementById("guess").value;
  let hits = 0;

  if ((guess >= 1) && (guess <= 10)) {
    do {
      x = Math.floor(Math.random() * 9) + 1;
      hits++;
      console.log(x);
    } while (x != guess)

    document.getElementById("result").innerHTML = "Has necesitado " + hits + " intentos para acertar el número";
  }else{
    window.alert("El número no entra dentro del rango permitido (1-10)");
  }
}