import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/use-products';

export default function ProductsChallenge() {
    const [checked, setChecked] = useState(false);
    const [isLoading, products, error] = useProducts({ salesOnly: checked })

    const handleChange = () => setChecked(prev => !prev)

    //checked 라는 값이 변할 때마다 새로 렌더링 해줘


    if (error) return <p>{error}</p>;

    return (
        <>
            <input id='checkbox' type='checkbox' value={checked} onChange={handleChange} />
            <label htmlFor='checkbox'>Show Only 🔥 sale</label>
            {isLoading ? (<p>Loading...</p>) : (<ul>
                {products && products.map(product => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>)}
        </>
    );
}

