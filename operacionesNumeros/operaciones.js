function clickButton() {
    nums = document.getElementById("list").value.split(",");
    document.getElementById("showNums").innerHTML = nums;

    resultSum = 0;
    resultMulti = 1;
    resultAvg = 0;

    nums.forEach(element => {
        num = parseInt(element);

        (num % 2 == 0) ? resultSum += num : resultMulti *= num;

        resultAvg += num;
    });

    resultAvg = resultAvg / nums.length;

    document.getElementById("sum").innerHTML = "La suma de los números pares es: " + resultSum;
    document.getElementById("multi").innerHTML = "La multiplicación de los números inpares es: " + resultMulti;
    document.getElementById("avg").innerHTML = "La media es: " + resultAvg;
    document.getElementById("big").innerHTML = "El número más grande es: " + parseInt(Math.max.apply(null,nums));
    document.getElementById("big").innerHTML = "El número más pequeño es: " + parseInt(Math.min.apply(null,nums));
}