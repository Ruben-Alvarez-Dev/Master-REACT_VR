class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }
    aunemtarVelociad(){
        this.velocidad += 1;
    }
    reducirVelociad(){
        this.velocidad -= 1;
    }
};

var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 150, 2018);
var coche3 = new Coche('Mercedes', 180, 2015);
var coche4 = new Coche('Renault', 140, 2020);

console.log(coche1);
coche1.aunemtarVelociad();
coche1.aunemtarVelociad();
coche1.aunemtarVelociad();
console.log(coche1);

