import {
    Lobo,
    Leon,
    Aguila,
    Serpiente,
    Oso
} from "./clases.js";


import {
    tipoElement,
    edadElement,
    comentariosElement,
    btnRegistrar,
} from "./variables.js";

import {
    limpiarFormulario
} from "./reset.js";


import {
    previewImagen
} from "./preview.js";

import {
    mostrarImagenEnTabla,
    instancias
} from "./tablaAnimales.js";

// iife fetch async await obtener los datos del json
(async () => {
    try {
        const url = "./assets/animales.json";
        const resultado = await fetch(url);
        const resultadoJson = await resultado.json();
        datosAnimalesJson(resultadoJson.animales)
    } catch (error) {
        console.log(error);
    }
})();

// validación de datos e instacia de animal seleccionado
function datosAnimalesJson(animales) {

    previewImagen();
    let tipo;
    let edad;
    let comentarios;
    let id;

    btnRegistrar.addEventListener("click", () => {

        tipo = tipoElement.value;
        edad = edadElement.value;
        comentarios = comentariosElement.value;
        id = Date.now().toString();

        if (tipo === "" || edad === "" || comentarios === "") {
            alert("Por favor llene los campos requeridos")
        } else {
            animales.map(animal => {
                if (animal.name === tipo) {
                    if (tipo === "Leon") {
                        const leon = new Leon(animal.name, edad, animal.imagen, comentarios, animal.sonido, id);
                        instancias.push(leon)
                    } else if (tipo === "Lobo") {
                        const lobo = new Lobo(animal.name, edad, animal.imagen, comentarios, animal.sonido, id);
                        instancias.push(lobo)
                    } else if (tipo === "Oso") {
                        const oso = new Oso(animal.name, edad, animal.imagen, comentarios, animal.sonido, id);
                        instancias.push(oso)
                    } else if (tipo === "Serpiente") {
                        const serpiente = new Serpiente(animal.name, edad, animal.imagen, comentarios, animal.sonido, id);
                        instancias.push(serpiente)
                    } else if (tipo === "Aguila") {
                        const aguila = new Aguila(animal.name, edad, animal.imagen, comentarios, animal.sonido, id);
                        instancias.push(aguila)
                    }
                    mostrarImagenEnTabla(instancias);
                    limpiarFormulario();
                }
            });
        }
    })
}