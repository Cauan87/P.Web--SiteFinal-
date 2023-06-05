import './Header.css'

function Header(){
    return <header>
            <h1 class="logo">Astral Perceptions</h1>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Feed</a></li>
                    <li><a>Faça o seu!</a></li>
                </ul>
            </nav>
            <a><button>SignUp/SignIn</button></a>
        </header>
}

export default Header