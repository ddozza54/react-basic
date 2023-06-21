import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProfile from './AppProfile';
import './AppProfile.css';

//html 에 있던 root 를 가져와서, 거기에 루트를 생성해준다. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //strict 모드는 개발하는 동안에만 켜져있고, 배포할 때 꺼짐. 
  <React.StrictMode>
    <AppProfile />
  </React.StrictMode>
);
