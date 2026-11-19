
import { productos } from "./data/productos";
import ProductoCard from "./components/ProductoCard";
import "./App.css";

function App() {

    // Productos disponibles
    const productosDisponibles = productos.filter(
        producto => producto.stock > 0
    );

    // Comprobar si hay productos agotados
    const hayProductosAgotados = productos.some(
        producto => producto.stock === 0
    );

    // Calcular valor total del inventario
    const valorInventario = productos.reduce(
        (total, producto) => {
            return total + (producto.precio * producto.stock);
        },
        0
    );

    return (
        <div className="contenedor">

            <header>
                <h1>Mi Tienda Online</h1>
                <p>Catálogo de productos tecnológicos</p>
            </header>

            <main>

                {/* Catálogo completo */}
                <section>
                    <h2>Todos nuestros productos</h2>

                    <div className="productos-grid">
                        {productos.map(producto => (
                            <ProductoCard
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </div>
                </section>

                {/* Productos disponibles */}
                <section>
                    <h2>Productos disponibles</h2>

                    <div className="productos-grid">
                        {productosDisponibles.map(producto => (
                            <ProductoCard
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </div>
                </section>

                {/* Resumen del inventario */}
                <section>
                    <h2>Resumen del inventario</h2>

                    <p>
                        Total de productos: {productos.length}
                    </p>

                    <p>
                        Productos disponibles: {productosDisponibles.length}
                    </p>

                    <p>
                        ¿Hay productos agotados?{" "}
                        {hayProductosAgotados ? "Sí" : "No"}
                    </p>

                    <p>
                        Valor total del inventario: $
                        {valorInventario.toLocaleString("es-CO")}
                    </p>
                </section>

            </main>
        </div>
    );
}

export default App;
