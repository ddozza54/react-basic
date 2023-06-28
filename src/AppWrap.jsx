import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                    image="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                    name="Bob"
                    size={200}
                    title="백엔드 개발자" />
                <p>백앤드 개발자</p>
            </Navbar>
            <Navbar>
                <h1>넵바</h1>
                <h2>재사용</h2>
            </Navbar>
        </div>
    );
}


function Navbar({ children }) {
    return (
        <header style={{ backgroundColor: 'cornflowerblue' }}>
            {children}
        </header>
    )
}

function Avatar({ image, name, size }) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: "50%" }}
            />
        </div>
    )
}