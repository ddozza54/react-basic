import React, { useEffect, useState } from 'react';

export default function ProductsChallenge() {
    //useState 에 값 할당하지 않으면 undefined 설정됨.  
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(true);

    const handleChange = () => setChecked(prev => !prev)
    useEffect(() => {
        setError()
        setIsLoading(true)
        fetch(`data/${checked ? "sale_" : ""}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log('🔥')
                setProducts(data)
            }).catch((e) => {
                setError("에러가 발생했습니다.")
                console.log(e);
            }).finally(() => {
                setIsLoading(false)
            });
        return () => { console.log("🧹") }
    }, [checked])
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
            <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
        </>
    );
}

