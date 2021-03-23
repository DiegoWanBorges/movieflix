import './styles.scss'
import { ReactComponent as Arrow } from '../../../../core/assets/images/arrow.svg'
import EyesOpened  from '../../../../core/assets/images/eyesOpened.png'
import EyesClosed  from '../../../../core/assets/images/eyesClosed.png'
import { useState } from 'react'

const LoginCard = () => {
    const [hidePassword, setHidePassword]=useState(false);
    return (
        <div className="card-login-main">
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
                type={hidePassword ? "text" : "password"}
                placeholder="Senha"
            />
            <button 
                className="card-login-hide-password" 
                onClick={() => setHidePassword(!hidePassword)}
            >
                <img src={hidePassword ?  EyesClosed : EyesOpened} alt="" />
            </button>

            <div className="card-login-button">
                <button className="card-login-btn-icon">
                    LOGAR
                </button>
                
                
                <div className="card-login-btn-incon-content">
                    <Arrow />
                </div>
            </div>
        </div>
    )
}
export default LoginCard;