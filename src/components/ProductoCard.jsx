function ProductoCard({ producto }) {
    return (
        <div className="producto-card">
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio.toLocaleString("es-CO")}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>
                Stock: {producto.stock > 0
                    ? producto.stock
                    : "Agotado"}
            </p>
        </div>
    );
}

export default ProductoCard;