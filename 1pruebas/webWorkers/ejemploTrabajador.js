var anterior = 0;
var actual = 1;
var secuencia = "";
function temporizador(){
    aux = anterior + actual;
    anterior = actual;
    actual = aux;

    if(!anterior){
        secuencia+=" "+actual;
    }else{
        secuencia+=" "+actual;
    }
    postMessage(secuencia);
    
    setTimeout("temporizador()" , 500);
}

temporizador();