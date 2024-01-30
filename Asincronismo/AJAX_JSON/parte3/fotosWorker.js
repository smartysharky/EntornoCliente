fotos = [];

xmlhttp = new XMLHttpRequest();
url = "../fotos.txt";

function getFotos(datos){
    for (i = 0; i < datos.length; i++) {
        registro = {};

        registro.display = datos[i].display;
        registro.url = datos[i].url;

        fotos[i] = registro;
    }
}

function newRequest() {

    xmlhttp.onreadystatechange = function () { //se ejecuta esto cuando hay cambios en el fichero
        if (this.readyState == 4 && this.status == 200) {
            var listaInfo = JSON.parse(this.responseText); //parseamos el fichero a json
            getFotos(listaInfo); //llamamos a la funcion que dice que hacer con esa info cada 5 segundos
            postMessage(fotos);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    setTimeout("newRequest()",5000);
}

newRequest();