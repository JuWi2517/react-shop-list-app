function ItemList({ items, removeItem }) {
    return (
        <div className="item-list mb-4">
            {items.map(item => (
                <div className="d-flex justify-content-between align-items-center border p-2 mb-2" key={item.id}>
                    <div className="item-name">{item.name}</div>
                    <div className="item-quantity">{item.quantity} ks</div>
                    <div>
                        <button className="btn btn-success btn-sm me-2" onClick={() => {}}>Hotovo</button>
                        <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Odebrat</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;