
function horas() {
    var now = new Date();
    var theHours = {
        hours : now.getHours,
        minutes :  now.getMinutes,
        seconds : now.getSeconds,
    };
    postMessage(theHours);
    setTimeout("horas()", 1000);
}
horas();
