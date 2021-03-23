import './styles.scss'
import { ReactComponent as Arrow } from '../../../../core/assets/images/arrow.svg'
import EyesOpened  from '../../../../core/assets/images/eyesOpened.png'
import EyesClosed  from '../../../../core/assets/images/eyesClosed.png'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { makeLogin } from '../../../../core/utils/request'
import { saveSessionData } from '../../../../core/utils/auth'

type FormState = {
    username: string;
    password: string;
}
const LoginCard = () => {
    const [hidePassword, setHidePassword]=useState(false);
    const [hasError, setHasError] = useState(false);
    const { register, handleSubmit, errors } = useForm<FormState>();

    const onSubmit = (data: FormState) => {
        makeLogin(data)
                  .then(response => {
                    console.log(response)
                    setHasError(false);
                    saveSessionData(response.data);
                  })
                  .catch((erro)=>{
                      console.log(erro)
                      setHasError(true);
                  })
        ;
    }

    return (
        <div className="card-login-main">
            <h1 className="card-login-title">
                LOGIN
           </h1>
            <input
                className="card-login-input"
                type="text"
                placeholder="Email"
                name="username"
                ref={register({
                    required: "Campo obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                />
                {errors.username && (
                <div className="invalid-feedback d-block">
                        {errors.username.message}
                </div>
                )}

            <input
                className="card-login-input card-login-password"
                type={hidePassword ? "text" : "password"}
                placeholder="Senha"
                name="password"
                    ref={register({ required: "Campo obrigatório"})}
                    />
                    {errors.password && (
                    <div className="invalid-feedback d-block">
                            {errors.password.message}
                    </div>
                    )}
            <button 
                className="card-login-hide-password" 
                onClick={() => setHidePassword(!hidePassword)}
            >
                <img src={hidePassword ?  EyesClosed : EyesOpened} alt="" />
            </button>

            <div className="card-login-button">
                <button 
                    className="card-login-btn-icon"
                    onClick={handleSubmit(onSubmit)}
                >
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