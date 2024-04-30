import Producto from './producto.js';

class Libro extends Producto {
    constructor(nombre, precio, autor) {
        super(nombre, precio);
        this._autor = autor;
    }

    get autor() {
        return this._autor;
    }

    set autor(autor) {
        this._autor = autor;
    }

    static tipo() {
        return 'Libros';
    }
}

export default Libro;
