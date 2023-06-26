import React, { useState } from 'react';

export default function Conter({ onChange, sum }) {
    const [count, setCount] = useState(0)
    return (
        <div className='counter'>
            <div>
                <span className='counterNum'>{count}</span>
                <span>/{sum}</span>
            </div>
            <button className='button' onClick={() => {
                setCount(prev => prev + 1);
                onChange(prev => prev + 1);
            }}>Add +</button>
        </div>
    );
}

