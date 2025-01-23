import './header-styles.scss'
export function Header() {
  return (
    <header className="header">
        <div className="header__content">
            <a href="/">
                <img 
                src='../../assets/pokemon-logo.svg'
                alt="Pokemon Logo"
                className="header__logo"
                />
            </a>
            <nav>
                <a href="#">Documentação</a>
            </nav>
        </div>
    </header>
  )
}
