import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { isTokenValid, logout } from '../../utils/auth';
import './styles.scss'

const NavBar = () => {
    const [isAuth, setIsAuth] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsAuth(isTokenValid())
    }, [location])

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="nav-main">
            <h1 className="nav-title">
                MovieFlix
            </h1>
            {
                isAuth ? (
                    <button
                        className="nav-btn-logout"
                        type="button"
                        onClick={
                            (e) => {
                                handleLogout(e);

                            }
                        }
                    >
                        SAIR
                    </button>
                ) : null
            }


        </nav>
    )
}

export default NavBar;