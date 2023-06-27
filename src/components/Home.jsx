import {React, useState, useEffect} from 'react';
import '/src/styles/Home.css';
import { Link } from 'react-router-dom'
import Header from './Header';

function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return <div>
    <Header/>
    <div  className="container">
      <p>Já pensou em poder compartilhar algo que você sabe sobre o universo?,  além disso, poder aprender coisas novas através dos comentários de seu post?</p>
        <Link to="/addpost"><button id="createPost"><span>Crie sua própria anotação!</span><span><img className="iconButton" src="src/assets/saturn.svg"/></span></button></Link>
    </div>
  </div>
}

export default Home;