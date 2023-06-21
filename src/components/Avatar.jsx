import React from 'react';

export default function Avatar({ img, newcomer }) {
    return (
        <div className='avatar'>
            <img
                className='photo'
                src={img}
                alt='photo' />
            {newcomer && <div className='newcomer'><span>NEW</span></div>}
        </div>
    );
}

