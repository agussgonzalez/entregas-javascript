let coste = 0;
let nochesHotel, ciudadDestino, diasCoche;

function saludar() {
    alert("Hola! Vamos a calcular tu próximo viaje :)");
}

function hotel() {
    nochesHotel = prompt("Ingresar número de noches siendo 4 el mínimo y 8 el máximo");

    switch (nochesHotel) {
        case "4":
            alert("Tu número de noches son 4 a 350€");
            coste += 350;
            break;
        case "5":
            alert("Tu número de noches son 5 a 450€");
            coste += 450;
            break;
        case "6":
            alert("Tu número de noches son 6 a 550€");
            coste += 550;
            break;
        case "7":
            alert("Tu número de noches son 7 a 650€");
            coste += 650;
            break;
        case "8":
            alert("Tu número de noches son 8 a 750€");
            coste += 750;
            break;
        default:
            alert("Tu número de noches no es válido");
            break;
    }
    console.log(nochesHotel);
}

function vuelo() {
    ciudadDestino = prompt("Ingresa una ciudad de las siguientes en la lista: Madrid, Paris, Roma, Copenhague");

    switch (ciudadDestino) {
        case "Madrid":
            alert("Tu vuelo a Madrid son 130€");
            coste += 130;
            break;
        case "Paris":
            alert("Tu vuelo a Paris son 230€");
            coste += 230;
            break;
        case "Roma":
            alert("Tu vuelo a Roma son 100€");
            coste += 100;
            break;
        case "Copenhague":
            alert("Tu vuelo a Copenhague son 300€");
            coste += 300;
            break;
        default:
            alert("No hay vuelos disponibles para esa ciudad");
            break;
    }
    console.log(ciudadDestino);
}

function alquilerCoche() {
    diasCoche = prompt("Ingresa los dias que alguilarás un coche. De 5 a 8 días");
    switch (diasCoche) {
        case "5":
            alert("Tu coste de alquiler de coche para 5 días es de 400€");
            coste += 400;
            break;
        case "6":
            alert("Tu coste de alquiler de coche para 6 días es de 450€");
            coste += 450;
            break;
        case "7":
            alert("Tu coste de alquiler de coche para 7 días es de 500€");
            coste += 500;
            break;
        case "8":
            alert("Tu coste de alquiler de coche para 8 días es de 550€");
            coste += 550;
            break;
        case "0":
            alert("Tu coste de alquiler de coche para 0 días es de 0€");
            break;
        default:
            alert("No hay precios disponibles para esos días");
            break;
    }
    console.log(diasCoche);
}

function resultado() {
    let cantNochesHotel = parseInt(nochesHotel);
    let cantDiasCoche = parseInt(diasCoche);

    alert("Noches de hotel: " + cantNochesHotel + ", ciudad destino: " + ciudadDestino + ", días de coche alquilados: " + cantDiasCoche);
    alert("Tu presupuesto final es de: " + coste + "€");
}

function ejecutarSimulador() {
    saludar();
    hotel();
    vuelo();
    alquilerCoche();
    resultado();
}

ejecutarSimulador();

