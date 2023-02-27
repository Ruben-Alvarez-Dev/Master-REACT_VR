// alert('hola');

var nombre = 'ruben';
var altura = 175;

var concatenacion = nombre + " " + altura;

// document.write(concatenacion);

// var datos = document.getElementById('datos');
// datos.innerHTML = `
//     <h1>Inyección de h1 - caja de datos</h1>
//     <h2>Nombre: ${nombre}</h2>
//     <h2>Altura: ${altura}</h2>
// `

// if (altura >= 160) {
//     datos.innerHTML += "<h1>ERES ALTO</h1>";
// } else if (altura < 160) {
//     datos.innerHTML += "<h1>ERES BAJO</h1>";
// } else {
//     datos.innerHTML += "<h1>ALGO SALIO MAL</h1>"
// };

// for (var i = 2000; i <= 2022; i++) {
//     // Bloque de instrucciones
//     datos.innerHTML += `<h2>Estamos en el año: ${i}</h2>`
// };

// FUNCIONES

function MuestraMiNombre (nombre, altura){
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura}</h3>
    `
    return misDatos
}

function Imprimir(){
    var datos = document.getElementById('datos');
    datos.innerHTML = MuestraMiNombre("Donald Trump", 170);
}

Imprimir();

var nombres = ["Antonio", "Bernardo", "Carmen"];

for (i = 0; i < nombres.length; i++) {
    datos.innerHTML += nombres[i] + '<br>';
    // document.write(nombres[i]);
}

nombres.forEach(function(nombre) {
    datos.innerHTML += nombre + '<br>';

})

nombres.forEach((nombre) => {
    datos.innerHTML += nombre + '<br>';

})