
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
};

// Funcion flecha para calcular el cuadrado
const cuadrado = (numero) => {
    return numero * numero;
};

// Funcion flecha para verificar si es mayor de edad
const esMayorEdad = (edad) => {
    return edad >= 18;
};

// Funcion flecha para unir nombre y apellido
const nombreCompleto = (nombre, apellido) => {
    return nombre + " " + apellido;
};

// Ejecutar las funciones
console.log("Cuadrado:", cuadrado(5));
console.log("Mayor de edad:", esMayorEdad(20));
console.log("Nombre completo:", nombreCompleto("Nicolas", "Lozano"));
console.log("Promedio:", calcularPromedio(4, 3, 5));
console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));
console.log("División:", dividir(10, 5));
// Paso 6: Arrays y objetos



console.log("Lista de productos:", productos);
// Paso 7: Recorrer productos con forEach

console.log("Listado de productos:");

productos.forEach((producto, indice) => {
    console.log(
        indice + 1,
        producto.nombre,
        "Precio:", producto.precio,
        "Stock:", producto.stock
    );
});
// Paso 8: map

const preciosConIva = productos.map(producto => {
    return producto.precio * 1.19;
});

console.log("Precios con IVA:", preciosConIva);


const nombresMayuscula = productos.map(producto => {
    return producto.nombre.toUpperCase();
});

console.log("Nombres en mayúscula:", nombresMayuscula);


const resumenProductos = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio
    };
});

console.log("Resumen de productos:", resumenProductos);
// Paso 9: filter y find

const productosCaros = productos.filter(producto => {
    return producto.precio > 100000;
});

console.log("Productos mayores a 100000:", productosCaros);


const rangoPrecios = productos.filter(producto => {
    return producto.precio >= 50000 && producto.precio <= 200000;
});

console.log("Productos entre 50000 y 200000:", rangoPrecios);


const productosTecnologia = productos.filter(producto => {
    return producto.categoria === "Tecnologia";
});

console.log("Productos de tecnologia:", productosTecnologia);


const productoCinco = productos.find(producto => {
    return producto.id === 5;
});

console.log("Producto con ID 5:", productoCinco);


function buscarProducto(id) {
    return productos.find(producto => producto.id === id);
}

console.log("Buscar producto:", buscarProducto(3));
// Paso 10: some, every y reduce

const hayProductosSinStock = productos.some(producto => {
    return producto.stock === 0;
});

console.log("Hay productos sin stock:", hayProductosSinStock);


const hayProductosMillonarios = productos.some(producto => {
    return producto.precio > 1000000;
});

console.log("Hay productos mayores a un millon:", hayProductosMillonarios);


const todosTienenPrecio = productos.every(producto => {
    return producto.precio > 0;
});

console.log("Todos tienen precio:", todosTienenPrecio);


const todosTienenStockValido = productos.every(producto => {
    return producto.stock >= 0;
});

console.log("Todos tienen stock valido:", todosTienenStockValido);


const valorInventario = productos.reduce((total, producto) => {
    return total + (producto.precio * producto.stock);
}, 0);

console.log("Valor total del inventario:", valorInventario);
// Paso 11: JavaScript moderno

// Template literals
const nombreTienda = "Mi Tienda";

console.log(`Bienvenido a ${nombreTienda}`);


// Destructuring
const primerProducto = productos[0];

const { nombre, precio, stock } = primerProducto;

console.log("Nombre:", nombre);
console.log("Precio:", precio);
console.log("Stock:", stock);


// Spread operator
const productoModificado = {
    ...primerProducto,
    precio: 2000000,
    stock: 10
};

console.log("Producto original:", primerProducto);
console.log("Producto modificado:", productoModificado);


// Operador ternario
const estadoStock = primerProducto.stock > 0
    ? "Disponible"
    : "Agotado";

console.log("Estado:", estadoStock);