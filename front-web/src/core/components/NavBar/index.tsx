import './styles.scss'

const NavBar = () => {
    return (
        <nav className="nav-main">
            <h1 className="nav-title">
                MovieFlix
            </h1>
                <button   
                    className="nav-btn-logout"
                    type="button"
                >
                    SAIR
                </button>
        </nav>
    )
}

export default NavBar;