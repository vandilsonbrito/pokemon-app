import './header-styles.scss'
export function Header() {
  return (
    <header className="header">
        <div className="header__content">
            <img 
            src='../../assets/pokemon-logo.svg'
            alt="Pokemon Logo"
            className="header__logo"
            />
            <nav>
                <a href="#">Documentação</a>
            </nav>
        </div>
    </header>
  )
}
