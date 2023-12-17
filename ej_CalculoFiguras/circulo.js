const PI = 3.14;

function areaCirculo(radio){
    x = radio**2;
    result = PI * x;
    document.getElementById("circuloA").innerHTML = result;
}

function periCirculo(radio) {
    diametro = radio*2;
    result = PI * diametro;
    document.getElementById("circuloP").innerHTML = result;
}