function areaParalele(baseX, baseY, altura){
    x = baseX * altura;
    y = baseY * altura;
    z = baseX * baseY;

    suma = x + y + z;
    result = suma * 2;
    document.getElementById("paralele").innerHTML = result;
}