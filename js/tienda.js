import Libro from './libro.js';
import Disco from './disco.js';
import Serie from './serie.js';

const libro1 = new Libro('Murciélago', 20, 'Jo Nesbo');
const libro2 = new Libro('Cementerio de animales', 15, 'Stephen King');
const libro3 = new Libro('Buenos presagios', 15, 'Neil Gaiman & Terry Pratchett');
const libro4 = new Libro('El sabueso de los Baskerville', 25, 'Arthur Conan Doyle');
const libro5 = new Libro('Heartstopper', 15, 'Alice Oseman');
const libro6 = new Libro('Matar a un ruiseñor', 17, 'Harper Lee');
const libro7 = new Libro('Crimen y castigo', 22, 'Fyodor Dostoevsky');
const libro8 = new Libro('El Gran Gatsby', 16, 'F. Scott Fitzgerald');
const libro9 = new Libro('Orgullo y prejuicio', 14, 'Jane Austen');
const libro10 = new Libro('Don Quijote de la Mancha', 28, 'Miguel de Cervantes');
const libro11 = new Libro('Murciélago', 20, 'Jo Nesbo');
const libro12 = new Libro('Cien años de soledad', 15, 'Gabriel García Márquez');
const libro13 = new Libro('El Señor de los Anillos', 25, 'J.R.R. Tolkien');
const libro15 = new Libro('1984', 12, 'George Orwell');


const disco1 = new Disco('A Night At The Opera', 20, 'Queen');
const disco2 = new Disco("Teatro d'ira", 18, 'Maneskin');
const disco3 = new Disco('Trench', 20, 'Twenty One Pilots');
const disco4 = new Disco('Unreal Unearth', 25, 'Hozier');

const serie1 = new Serie('The Last Of Us', 25, 'Terror, Ciencia ficción');
const serie2 = new Serie('Yellowjackets', 25, 'Thriller, Drama psicológico');
const serie3 = new Serie('Our Flag Means Death', 25, 'Comedia romántica, Histórica');
const serie4 = new Serie('What We Do In The Shadows', 25, 'Falso documental, Comedia');


const listaTiposProductos = [Libro.tipo(), Disco.tipo(), Serie.tipo()];
const listaProductos = [[libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro15],[disco1, disco2, disco3, disco4],[serie1, serie2, serie3, serie4]]; // agrupa los productos por tipo

export { listaTiposProductos, listaProductos };
