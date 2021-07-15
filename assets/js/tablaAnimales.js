import {
    contenedorAnimales
} from "./variables.js";

import {
    mostrarModal
} from "./modal.js";

import {
    limpiarHTML
} from "./reset.js";

import {
    sonidosAnimales
} from "./sonidoAnimales.js";

export let instancias = [];


// mostrar imagen en la tabla principal
export function mostrarImagenEnTabla(instancia) {
    instancias = [...instancias];
    limpiarHTML();

    instancia.forEach(element => {

        contenedorAnimales.innerHTML += `<div class="mb-2 mr-2" ><img id="${element.id}" width="200px" height="200px"  src="./assets/imgs/${element.img}"> <div class="sonido"><img class="${element.nombre}" style="cursor:pointer" width="50px" height="50px"src="./assets/imgs/audio.svg"><div></div>`
    });

    sonidosAnimales(instancias);

    mostrarModal(instancias);
}