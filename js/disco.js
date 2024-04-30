import Producto from './producto.js';

class Disco extends Producto {
    constructor(nombre, precio, artista) {
        super(nombre, precio);
        this._artista = artista;
    }

    get artista() {
        return this._artista;
    }

    set artista(artista) {
        this._artista = artista;
    }

    static tipo() {
        return 'Discos';
    }
}

export default Disco;