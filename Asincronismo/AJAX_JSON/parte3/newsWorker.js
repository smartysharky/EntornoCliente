news = [];

xmlhttp = new XMLHttpRequest();
url = "../news.txt";

function getNews(datos){
    for (i = 0; i < datos.length; i++) {
        registro = {};

        registro.titulo = datos[i].titulo;
        registro.info = datos[i].info;

        news[i] = registro;
    }
}

function newRequest() {

    xmlhttp.onreadystatechange = function () { //se ejecuta esto cuando hay cambios en el fichero
        if (this.readyState == 4 && this.status == 200) {
            var listaInfo = JSON.parse(this.responseText); //parseamos el fichero a json
            getNews(listaInfo); //llamamos a la funcion que dice que hacer con esa info cada 5 segundos
            postMessage(news);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    setTimeout("newRequest()",5000);
}

newRequest();