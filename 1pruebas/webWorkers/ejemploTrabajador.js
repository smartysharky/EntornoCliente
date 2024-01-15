var anterior = 0;
var actual = 1;
var secuencia = "";
function temporizador(){
    
    if(!anterior){
        secuencia+=" "+actual;
    }else{
        secuencia+=" "+actual;
    }

    aux = anterior + actual;
    anterior = actual;
    actual = aux;
    postMessage(secuencia);
    
    setTimeout("temporizador()" , 500);
}

temporizador();