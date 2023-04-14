import Logo from '../Images/Logo-couleurs';

function Header() {
    return (
        <header>
            <a href='/'><Logo/></a>
            <ul>
                <li><a href='/' className={window.location.pathname === '/' ? 'current' : null}>Accueil</a></li>
                <li><a href='/about' className={window.location.pathname === '/about' ? 'current' : null}>A Propos</a></li>
            </ul>
        </header>
    )
}

export default Header;