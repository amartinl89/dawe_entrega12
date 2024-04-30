import Producto from './producto.js';

class Serie extends Producto {
    constructor(nombre, precio, genero) {
        super(nombre, precio);
        this._genero = genero;
    }

    get genero() {
        return this._genero;
    }

    set genero(genero) {
        this._genero = genero;
    }

    static tipo() {
        return 'Series';
    }
}

export default Serie;