export function sonidosAnimales(animales) {
    $(".sonido").on("click", (event) => {
        let nombreAnimal = event.target.className;
        let animal = animales.find((element) => {
            return element.nombre === nombreAnimal;
        })
        switch (animal.nombre) {
            case "Leon":
                animal.rugir();
                break;
            case "Lobo":
                animal.aullar();
                break;
            case "Oso":
                animal.gruñir();
                break;
            case "Serpiente":
                animal.sisear();
                break;
            case "Aguila":
                animal.chillar();
                break;
            default:
                break;
        }
    });
}