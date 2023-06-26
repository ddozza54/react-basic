import React, { useState } from 'react';
import './AppXY.css'

export default function AppXY() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (e) => {
        setX(e.clientX + 15);
        setY(e.clientY + 15);
    }
    return (
        <div className='container' onMouseMove={handleMouseMove}>
            <div className='pointer' style={{ left: x, top: y }} />
        </div>
    );
}

