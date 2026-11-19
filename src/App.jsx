
import { productos } from "./data/productos";
import ProductoCard from "./components/ProductoCard";
import "./App.css";

function App() {
  const productosDisponibles = productos.filter(
    producto => producto.stock > 0
  );

  const hayProductosAgotados = productos.some(
    producto => producto.stock === 0
  );

  const valorInventario = productos.reduce(
    (total, producto) => total + (producto.precio * producto.stock),
    0
  );
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

        <section>
          <h2>Resumen del inventario</h2>

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
