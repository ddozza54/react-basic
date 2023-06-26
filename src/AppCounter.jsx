import React, { useState } from 'react';
import Counter from './components/Conter'

export default function AppCounter() {
    const [count, setCount] = useState(0)
    return (
        <div className='container'>
            <div className='banner'>Total Count: {count} {count > 10 ? "🔥" : "❄️"}</div>
            <Counter onChange={setCount} sum={count} />
            <Counter onChange={setCount} sum={count}/>
        </div>
    );
}

