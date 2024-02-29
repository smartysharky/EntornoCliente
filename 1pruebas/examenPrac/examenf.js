poderes = [];

http = new XMLHttpRequest();

function getPoderes(data){
    for (let i = 0; i < data.length; i++) {
        poder = {};

        poder.abilidad = data[i].abilidad;
        poder.descripcion = data[i].descripcion;
        
        poderes[i]=poder;
    }
}

function getRequest(){
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            listaDatos = JSON.parse(this.responseText);
            getPoderes(listaDatos);
            postMessage(poderes);
        }
    };

    http.open("GET", "examen.txt", true);
    http.send();

    setInterval(getRequest, 3000);

}

getRequest();