function newRequest() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () { //se ejecuta esto cuando hay cambios en el fichero
        if (this.readyState == 4 && this.status == 200) {
            var listaInfo = JSON.parse(this.responseText); //parseamos el fichero a json
            getNews(listaInfo); //llamamos a la funcion que dice que hacer con esa info cada 5 segundos
        }
    };

    postMessage(xmlhttp); //devolvemos la conexión ya preparada
}

/*
arr: informacion que mostrar por pantalla
*/
function getNews(arr) {
    var out = "";
    var i;

    for (i = 0; i < arr.length; i++) {
        out += '<h1>' + arr[i].titulo + '</h1><p>' + arr[i].info + '</p><br>';
    }

    document.getElementById("lasNoticias").innerHTML = out;
}

newRequest();
setTimeout(newRequest, 5000);
