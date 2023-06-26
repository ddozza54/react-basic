import React from 'react';
import Avatar from './Avatar';

export default function Profile({ img, name, title, newcomer }) {
    return (
        <div className='profile'>
            <Avatar img={img} newcomer={newcomer} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

