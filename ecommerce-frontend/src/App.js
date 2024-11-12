import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>E-commerce App</h1>
            </header>
            <CreateProduct />
            <ProductList />
        </div>
    );
}

export default App;
