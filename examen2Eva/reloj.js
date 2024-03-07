function getDate() {

    date = new Date();

    postMessage(date);

    setTimeout(getDate, 1000);
}

getDate();