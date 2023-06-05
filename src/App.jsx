import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return <div>
    <Header/>
    <div  className="container">
      <p>Já pensou em poder compartilhar algo que você sabe sobre o universo?,  além disso, poder aprender coisas novas através dos comentários de seu post ?</p>
      <button id="createPost"><span>Crie sua própria anotação!</span><span><img src="src/assets/saturn.svg"/></span></button>
    </div>
  </div>
}

export default App;