import {
    contenedorAnimales
} from "./variables.js";

import {
    mostrarModal
} from "./modal.js";

import {
    limpiarHTML
} from "./reset.js";

export let instancias = [];

// mostrar imagen en la tabla principal
export function mostrarImagenEnTabla(instancia) {
    instancias = [...instancias];
    console.log(instancias);
    limpiarHTML();
    instancia.forEach(element => {
        console.log(element);
        let claseImagenSonido = element.nombre;
        let idImajen = element.id;
        contenedorAnimales.innerHTML += `<div class="mb-2 mr-2" ><img id="${idImajen}" width="200px" height="200px"  src="./assets/imgs/${element.img}"> <div class="sonido"><img class="${claseImagenSonido}" style="cursor:pointer" width="50px" height="50px"src="./assets/imgs/audio.svg"><div></div>`

        contenedorAnimales.addEventListener("click", (event) => {
            if (event.target.className === "Leon") {
                element.rugir();
            } else if (event.target.className === "Oso") {
                element.gruñir();
            } else if (event.target.className === "Lobo") {
                element.aullar();
            } else if (event.target.className === "Serpiente") {
                element.sisear();
            } else if (event.target.className === "Aguila") {
                element.chillar();
            }
        })
    });
    mostrarModal(instancias);
}