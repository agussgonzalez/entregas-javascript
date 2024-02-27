function calculadoraPropina(deslizador, plata) {
    var propina = document.getElementById('propina');
    var deslival = document.getElementById('deslival');
    var plata = document.getElementById(plata).value;
    var porciento = deslizador * .01;
    propina.innerHTML = "$" + (plata * porciento).toFixed(2);
    deslival.innerHTML = deslizador + "%";
}
let numero = prompt("ingresa un numero para determinar si es par o inpar en un ciclo:");
numero = parseInt(numero);
for (let i = 0; i < numero; i++) {
    if (i % 2 === 0) {
        console.log(i + "es par");
    } else {
        console.log(i + "es impar");
    }
}
