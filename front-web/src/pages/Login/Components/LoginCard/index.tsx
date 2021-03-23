import './styles.scss'
import { ReactComponent as Arrow } from '../../../../core/assets/images/arrow.svg'

const LoginCard = () => {
    return (
        <form className="card-login-main">
            <h1 className="card-login-title">
                LOGIN
           </h1>
            <input
                className="card-login-input"
                type="text"
                placeholder="Email"
            />
            <input
                className="card-login-input card-login-password"
                type="password"
                placeholder="Senha"
            />

            <div className="card-login-button">
                <button className="card-login-btn-icon">
                    LOGAR
                </button>
                <div className="card-login-btn-incon-content">
                    <Arrow />
                </div>
            </div>
        </form>
    )
}
export default LoginCard;