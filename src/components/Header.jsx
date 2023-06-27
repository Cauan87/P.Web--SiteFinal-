import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/Header.css';

function Header(){
    function clickTest() {
        return console.log('tá funcionando Fi')
    }
    return <header>
            <h1 className="logo">Astral Perceptions</h1>
            <nav>
                <ul>
                    <li><Link className='nav-link' to='/'>Home</Link></li>
                    <li><Link className='nav-link' to='/feed'>Feed</Link></li>
                    <li><Link className='nav-link' to='/addpost'>Faça o seu!</Link></li>
                </ul>
            </nav>
            <a><button onClick={clickTest}>SignUp/SignIn</button></a>
        </header>
}

export default Header