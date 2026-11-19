
function ProductoCard({ producto }) {
    const disponible = producto.stock > 0;

    return (
        <div className="producto-card">
            <div className="producto-card-header">
                <span className="producto-categoria">
                    {producto.categoria}
                </span>

                <span className={`estado-stock ${disponible ? "disponible" : "agotado"}`}>
                    {disponible ? "Disponible" : "Agotado"}
                </span>
            </div>

            <h3>{producto.nombre}</h3>

            <p className="producto-precio">
                ${producto.precio.toLocaleString("es-CO")}
            </p>

            <p className="producto-stock">
                Unidades disponibles: {producto.stock}
            </p>
        </div>
    );
}

export default ProductoCard;
