import { listaTiposProductos, listaProductos } from './tienda.js';
import Libro from './libro.js';
import Disco from './disco.js';
import Serie from './serie.js';

window.onload = () => {

    // Objeto para almacenar la cantidad de cada producto en el carrito
    const carritoCantidad = {};

    // Función para imprimir la información de un producto en formato HTML
    function imprimirInfoProducto(producto) {
        const nombre = producto.nombre;
        const precio = producto.precio;
        const tipo = producto.constructor.name;
        var string = '';

        if (tipo == 'Libro') {
            const autor = producto.autor;
            string = `<div class="content"><div class="articulo"><div class="nombre"><span>${nombre}</span></div><div><span>Precio:</span> ${precio}€</div><div><span>Autor:</span> ${autor}</div>`+
            `</div><button class="Comprar" disabled>Comprar</button><input type="number" name="cantidad" step="1" min=0 value=0 required></div>`;
        } else if (tipo == 'Disco') {
            const artista = producto.artista;
            string = `<div class="content"><div class="articulo"><div class="nombre"><span>${nombre}</span></div><div><span>Precio:</span> ${precio}€</div><div><span>Artista:</span> ${artista}</div>`+
            `</div><button class="Comprar" disabled>Comprar</button><input type="number" name="cantidad" step="1" min=0 value=0 required></div></div>`;
        } else if (tipo == 'Serie') {
            const genero = producto.genero;
            string = `<div class="content"><div class="articulo"><div class="nombre"><span>${nombre}</span></div><div><span>Precio:</span> ${precio}€</div><div><span>Género:</span> ${genero}</div>`+
            `</div><button class="Comprar" disabled>Comprar</button><input type="number" name="cantidad" step="1" min=0 value=0 required></div></div>`;
        }

        return string;
    };
    // Obtener los contenedores de las columnas
    const columna1 = document.getElementById('col1');
    const columna2 = document.getElementById('col2');
    const columna3 = document.getElementById('col3');

    //Definir titulos de las columnas con los tipos de productos
    columna1.getElementsByTagName("h2")[0].innerHTML = listaTiposProductos[0];
    columna2.getElementsByTagName("h2")[0].innerHTML = listaTiposProductos[1];
    columna3.getElementsByTagName("h2")[0].innerHTML = listaTiposProductos[2];

    // Rellenar las columnas con los tipos de productos y sus respectivos productos
    for (let i = 0; i <= 2; i++) {
        const productosPorTipo = listaProductos[i]; // Seleccionamos los productos del tipo correspondiente
        const columna = i === 0 ? columna1 : i === 1 ? columna2 : columna3;
        for (let p = 0; p < productosPorTipo.length; p++) {
            var prod = productosPorTipo[p];
            var html = imprimirInfoProducto(prod);
            columna.innerHTML += html;
        }
    }

    function anadirEfectosHover(){

    //Efecto hover de los articulos del carrito
        // Seleccionar todos los elementos con la clase ".articulo" dentro del contenedor "#carrito"
        const articulos = document.querySelectorAll('#carrito .articulo');

        // Iterar sobre cada artículo y agregar un evento de mouseover
        articulos.forEach(articulo => {
            articulo.addEventListener('mouseover', () => {
                articulo.style.margin = '2px';
                articulo.style.backgroundColor = 'lightgrey';
            });

            // Agregar un evento de mouseout para restaurar los estilos originales cuando el mouse deja el elemento
            articulo.addEventListener('mouseout', () => {
                articulo.style.margin = '10px';
                articulo.style.backgroundColor = 'white';
            });
        });
    }

    function gestorCarrito() {
        const carrito = document.getElementById("carrito");

        carrito.addEventListener('mouseenter', function() {
            console.log("Mouse entró en el carrito");
            carrito.style.flex = '0 0 25%';
        });

        carrito.addEventListener('mouseleave', function() {
            console.log("Mouse salió del carrito");
            carrito.style.flex = '0 0 20%';
        });
    }


          // Llama a la función para cargar el gestor de eventos cuando la página se carga completamente
    function gestorBotonesPrecio(){
        // Obtén el elemento del botón y el campo de cantidad
        let botonComprar = document.getElementsByClassName('Comprar');
        let inputCantidad = document.getElementsByName("cantidad");

        // Agregar un evento de clic a cada botón "Comprar"
        for (let i = 0; i < botonComprar.length; i++) {
            botonComprar[i].addEventListener('click', function() {
                let cantidad = parseInt(inputCantidad[i].value);
                let producto = botonComprar[i].parentNode; // Obtener el producto correspondiente
                anadirProductoCarrito(producto, cantidad);
            });
        }

        // Agrega un evento al campo de cantidad para manejar cambios en su valor
        for (let i=0;i<inputCantidad.length;i++){
            inputCantidad[i].addEventListener('change', function() {
            // Obtén el valor actual de la cantidad

            let cantidad = parseInt(inputCantidad[i].value);
            // Deshabilita el botón si la cantidad es 0
            if (cantidad<=0){
                botonComprar[i].innerHTML="Comprar"
                botonComprar[i].disabled = (cantidad <= 0);
            }
            if (cantidad>9){
                botonComprar[i].innerHTML="Comprar"
                botonComprar[i].disabled  = (cantidad > 9);
            }
            // Muestra una alerta si la cantidad es mayor que 9
            
            if (cantidad < 0){
                inputCantidad[i].value = 0;
            }
            if (1<=cantidad &&cantidad<=9){
                botonComprar[i].disabled=false;
                botonComprar[i].innerHTML="Comprar "+cantidad;
            }
            })};
        
    };

    function anadirProductoCarrito(producto, n){
        const carrito = document.getElementById("articulos");

        //Quitar html correspondiente al botón
        const prodSolo = producto.getElementsByClassName("articulo")[0].outerHTML;


        // Parseamos el contenido HTML de 'prodSolo'
        var parser = new DOMParser();
        var prodHTML = parser.parseFromString(prodSolo, 'text/html');

        // Obtenemos el nombre del artículo
        var nombre = prodHTML.querySelector('.nombre span').innerText;

        const cantidadActual = carritoCantidad[nombre] || 0;

        // Verificar si la cantidad total en el carrito excede 9
        if (cantidadActual + n > 9) {
            alert('La cantidad total en el carrito no puede ser mayor de 9.');
            return; // No añadir el producto al carrito
        }

        // Actualizar la cantidad del producto en el carrito
        carritoCantidad[nombre] = cantidadActual + n;

        // Busca todos los elementos con la clase "nombre" dentro de los elementos con la clase "articulo"
        let elementosNombre = carrito.querySelectorAll('.articulo .nombre');

        // Itera sobre los elementos encontrados
        for(let i=0;i<elementosNombre.length;i++){
        //elementosNombre.forEach(elemento => {
            // Verifica si el texto del span es igual al nombre del producto
            //Se quita del nombre el nº de artículos mediante split
            let nom=elementosNombre[i].querySelector('span').innerText.split('x')[1];
            if (nom === nombre) {
                // Si es igual, actualiza la cantidad y sal del bucle
                elementosNombre[i].querySelector('span').innerText = `${carritoCantidad[nombre]}x${nombre}`;
                // Se resetea a 0 el spinner del producto añadido
                let reset =producto.childNodes[2];
                reset.value=0;
                producto.childNodes[1].innerHTML="Comprar";
                producto.childNodes[1].disabled=true;
                return;
            };
        //});
        }

        // Si el producto no está en el carrito, añadirlo
        const nombreActualizado = carritoCantidad[nombre] + "x" + nombre;

        // Actualizamos el nombre en el HTML
        prodHTML.querySelector('.nombre span').innerText = nombreActualizado;

        // Obtenemos el HTML actualizado como una cadena
        var prodActualizado = prodHTML.querySelector('.articulo').outerHTML;

        carrito.innerHTML += prodActualizado;

        anadirEfectosHover();
        // Se resetea a 0 el spinner del producto añadido
        let reset =producto.childNodes[2];
        reset.value=0;
        producto.childNodes[1].innerHTML="Comprar";
        producto.childNodes[1].disabled=true;
    };

    function cargarGestorEventos() {
        gestorBotonesPrecio();
        gestorCarrito();
      }
    cargarGestorEventos();
};