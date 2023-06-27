import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/Header.css';

function Header(){
    function clickTest() {
        return console.log('tá funcionando Fi')
    }
    return <div> <header>
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
          <div id="loginDialog" class="dialog">
          <h2>Login</h2>
          <form id='login'>
            <label for='username'>Username</label>
            <input type='text' id="username" form='login' placeholder='Nome de Usuário'></input>
            <label for="password">Senha</label>
            <input type='password' id="password" form="login" placeholder='Senha'></input>
            <button type='submit'>Cadastrar</button>
          </form>
        </div>
    </div>
}

export default Header