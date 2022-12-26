// Opciones de Hardware:

// Procesadores
let procesadores = ["Intel Core i9", "Intel Core i7", "Intel Core i5"];
console.log(procesadores.join(" - "));

const coreI9 = { 
    nombre: "Intel Core i9",
    precio: "500",
    disponible: "false",
};
const coreI7 = { 
    nombre: "Intel Core i7",
    precio: "400",
    disponible: "true",
};
const coreI5 = { 
    nombre: "Intel Core i5",
    precio: "200",
    disponible: "true",
};
console.log(coreI5["disponible"], coreI7["disponible"], coreI9["disponible"]);

// Tarjetas Graficas
let tarjetasGraficas = ["Nvidia RTX 3090 Ti", "AMD Radeon RX 6650 XT", "Nvidia GTX 1050 Ti"];
console.log(tarjetasGraficas.join(" - "));

const nvidia3090 = { 
    nombre: "Nvidia RTX 3090 Ti",
    precio: "900",
    disponible: "false",
};
const radeon6650 = { 
    nombre: "AMD Radeon RX 6650 XT",
    precio: "600",
    disponible: "true",
};
const nvidia1050 = { 
    nombre: "Nvidia GTX 1050 Ti",
    precio: "350",
    disponible: "true",
};
console.log(nvidia3090["disponible"], radeon6650["disponible"], nvidia1050["disponible"]);


// Dinero disponible
function dineroDisponible() {
let efectivo = prompt("Ingrese dinero disponible");
console.log(`El efectivo que usted tiene es : ${efectivo}`);
let credito = 1500;
let totalAPagar = 1400
}
dineroDisponible();