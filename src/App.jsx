
import { productos } from "./data/productos";
import ProductoCard from "./components/ProductoCard";
import "./App.css";

function App() {
    return (
        <div className="contenedor">
            <header>
                <h1>Mi Tienda Online</h1>
                <p>Catálogo de productos tecnológicos</p>
            </header>

            <main>
                <h2>Nuestros productos</h2>

                <div className="productos-grid">
                    {productos.map((producto) => (
                        <ProductoCard
                            key={producto.id}
                            producto={producto}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
