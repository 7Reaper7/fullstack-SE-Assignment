import React, { useEffect, useState } from 'react';
import './ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
        .then(() => setProducts(products.filter(product => product._id !== id)))
        .catch(err => console.error('Error deleting product:', err));
    };

    return (
        <div className="product-list">
            <h2>Product List</h2>
            {products.length > 0 ? (
                products.map(product => (
                    <div className="product" key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
}

export default ProductList;
