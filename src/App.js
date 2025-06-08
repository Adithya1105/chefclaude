import React from 'react';
import './App.css';      // your existing CSS (without the background-image)
import Header from './components/header';
import Main   from './main';

export default function App() {
  
  const bgUrl = process.env.PUBLIC_URL + '/images/kitchen.jpg';

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'  
      }}
    >
      <Header />
      <Main />
    </div>
  );
}
