// class principal Animal
export class Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getImg() {
        return this.img;
    }

    setComentarios(value) {
        this.comentarios = value;
    }

    getSonido() {
        return this.sonido;
    }
    getComentarios() {
        return this.comentarios
    }
}

// clases de tipos de elementos
export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }

    rugir() {
        const audioLeon = new Audio(`./assets/sounds/${this.sonido}`);
        audioLeon.play();
    }
}

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }

    aullar() {
        const audioLobo = new Audio(`./assets/sounds/${this.sonido}`);
        audioLobo.play();
    }
}

export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }

    gruñir() {
        const audioOso = new Audio(`./assets/sounds/${this.sonido}`);
        audioOso.play();

    }
}

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }

    sisear() {
        const audioSerpiente = new Audio(`./assets/sounds/${this.sonido}`);
        audioSerpiente.play();

    }
}

export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }

    chillar() {
        const audioAguila = new Audio(`./assets/sounds/${this.sonido}`);
        audioAguila.play();

    }
}