var actual = 0;
var secuencia = "";
var tiempo = 500;
onmessage = function(e){
    tiempo = tiempo - (e.data);
};

function temporizador(){
    
    actual++;

    secuencia = actual;

    postMessage(secuencia);
    
    setTimeout("temporizador()" , tiempo);
}

temporizador();