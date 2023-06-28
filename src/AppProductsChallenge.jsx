import React, { useState } from 'react';
import ProductsChallenge from './components/ProductsChallenge';

export default function AppProductsChallenge() {
    const [showProducts, setShowProducts] = useState(true);
    return (
        <div>
            {showProducts && <ProductsChallenge />}
            <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
        </div>
    );
}

