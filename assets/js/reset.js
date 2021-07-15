import {
    tipoElement,
    edadElement,
    comentariosElement,
    previewElement,
    contenedorAnimales
} from "./variables.js";
// limpiar formulario
export function limpiarFormulario() {
    tipoElement.selectedIndex = 0;
    edadElement.selectedIndex = 0;
    comentariosElement.value = "";

    if (document.querySelector("#imagenPequeña")) {
        previewElement.removeChild(document.querySelector("#imagenPequeña"));
    }
}

// limpia la tabla de imagenes
export function limpiarHTML() {
    contenedorAnimales.innerHTML = "";
}