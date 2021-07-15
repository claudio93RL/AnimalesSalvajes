import {
    tipoElement,
    previewElement
} from "./variables.js";

// mostrar imagen pequeña para previsualizar el animal
export let previewImagen = () => {
    tipoElement.addEventListener("change", () => {
        previewElement.innerHTML = `<img id="imagenPequeña" width="200px" height="200px" src="./assets/imgs/${tipoElement.value}.png" >`
    })
}