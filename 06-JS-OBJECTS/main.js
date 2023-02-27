var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        document.write(this.modelo + "<br>", this.maxima + "<br>", this.antiguedad + "<br>", this.propiedad1 + "<br>")
    },
    propiedad1: "Valor aleatorio"
};

document.write("<h1>" + coche.modelo + "</h1>");

coche.mostrarDatos();

console.log(coche);