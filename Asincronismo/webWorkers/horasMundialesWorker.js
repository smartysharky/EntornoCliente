
function horas() {
    var time = new Date();
    postMessage(time);

    setTimeout("horas()", 1000);
}
horas();
