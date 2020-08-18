import React, { useState} from 'react';
import './Login.scss';
import logo from '../../assets/media/img/miniLogoV3.svg';
import icon from '../../assets/media/img/Down-Row.svg';


function Login() {

    const [handleSelect, setHandleSelect] = useState(false)

    function link() {
        console.log("Directo al link")
    }

    function cancel(e: { preventDefault: () => void; }) {
        e.preventDefault();
        console.log("Cancelar")
    }

    function entry(e: { preventDefault: () => void;}) {
        e.preventDefault();
        console.log("Entrar")
    }

    return (
        <div className="login">
            <img className="login__logo" src={logo} alt="No se pudo encontrar el logo..."/>
            <form className="login__form">
                <div className="form__fild">
                    <label className="form__label" htmlFor="">Usuario:</label>
                    
                    <div className="form__select">
                        <div className="select__area" >
                            <input className="select__input input" type="text" name="name" id="name" defaultValue={"Default"}/>
                            <div className="select__icon" onClick={() => setHandleSelect(!handleSelect)}>
                                <img className={handleSelect ? 'icon-motion-right' : 'icon-motion-left'} src={icon} alt="V"/>
                            </div>
                        </div>

                        <div className="options_area" style={handleSelect ? {} : { display:'none' } }>
                            <div className="select__option">Opcion 1</div>
                            <div className="select__option">Opcion 2</div>
                            <div className="select__option">Opcion 3</div>
                            <div className="select__option">Opcion 1</div>
                            <div className="select__option">Opcion 2</div>
                            <div className="select__option">Opcion 3</div>
                            <div className="select__option">Opcion 1</div>
                            <div className="select__option">Opcion 2</div>
                            <div className="select__option">Opcion 3</div>
                        </div>

                    </div>

                </div>
                
                <div className="form__fild">
                    <label className="form__label" htmlFor="">Contraseña:</label>
                    <input className="form__password input" type="password" name="password" id="password" defaultValue={"pass"} />
                    <p className="form__link" onClick={link}>Olvide mi contraseña...</p>
                </div>
                
                
                <div className="form__btnArea">
                    <button className="form__btnCancel button" onClick={cancel}>Cancelar</button>
                    <button className="form__btnEntry button"  onClick={entry}>Entrar</button>
                </div>

            </form>
        </div>
    );
}

export default Login;