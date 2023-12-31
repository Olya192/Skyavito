import * as S from './Singin.Styled'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getUser, postAuth, postRegist } from '../../api';

export const Singing = ({ handModal, open }) => {
    const navigate = useNavigate()
    const [userReg, setUserReg] = useState(false)
    const handReg = () => setUserReg(prev => !prev)
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [surname, setSurname] = useState("");



    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }



    const handleLogin = async () => {

        if (!validateEmail(email)) {
            setError("Укажите почту")
            return
        }
        if (!email || !password) {
            setError("Укажите почту/пароль")
            return
        }
        try {
            console.log('Старт');
            const token = await postAuth(email, password)
            localStorage.setItem("tokenRefresh", token.refresh_token)
            localStorage.setItem("token", token.access_token)
            const user = await getUser()
            localStorage.setItem("user", JSON.stringify(user))
            console.log('Все ок');
            handModal()
        } catch (error) {
            setError(error?.message)
        }
    };

    const handleRegister = async () => {

        if (!validateEmail(email)) {
            setError("Укажите почту")
            return
        }
        if (!email || !password) {
            setError("Укажите почту/пароль")
            return
        }
        if (password !== repeatPassword) {
            setError("Пароли не совпадают")
            return
        }
        try {
            setError(null)
            const newUser = await postRegist(email, password, name, city, surname);
            const token = await postAuth(email, password)
            localStorage.setItem("tokenRefresh", token.refresh_token)
            localStorage.setItem("token", token.access_token)
            const user = await getUser()
            localStorage.setItem("user", JSON.stringify(user))
            handModal()
        } catch (error) {
            setError(error?.message)
        }
    };




    return (

        <>
            {!userReg ?
                < S.ModalBlock style={{ visibility: open ? 'hidden' : 'visible' }} >
                    <S.Backdrop onClick={handModal} />
                    <S.ModalFormLogin id="formLogIn" action="#" onSubmit={(e) => e.preventDefault()}>
                        <S.ModalLogo>
                            <img src="../img/logo_modal.png" alt="logo" />
                        </S.ModalLogo>
                        <S.ModalInput type="text"
                            name="login"
                            id="formlogin"
                            placeholder="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }} />
                        <S.ModalInput type="password"
                            name="password"
                            id="formpassword"
                            placeholder="Пароль"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }} />
                        <p>  {error ? `${error}` : ''}  </p>
                        <S.ModalButtonEnter id="btnEnter" onClick={() => handleLogin({ email, password })}> Войти </S.ModalButtonEnter>
                        <S.ModalButtonSignap id="btnSignUp" onClick={handReg}>Зарегистрироваться </S.ModalButtonSignap>
                    </S.ModalFormLogin>
                </S.ModalBlock >
                :
                <S.ModalBlock style={{ visibility: open ? 'hidden' : 'visible' }} >
                    <S.Backdrop onClick={handModal} />
                    <S.ModalFormLogin id="formLogUp" action="#" onSubmit={(e) => e.preventDefault()}>
                        <S.ModalLogo>
                            <img src="../img/logo_modal.png" alt="logo" />
                        </S.ModalLogo>
                        <S.ModalInput type="text" name="login" id="loginReg" placeholder="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }} />
                        <S.ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }} />
                        <S.ModalInput type="password" name="password" id="passwordSecond" placeholder="Повторите пароль"
                            value={repeatPassword}
                            onChange={(event) => {
                                setRepeatPassword(event.target.value);
                            }} />
                        <S.ModalInput type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }} />
                        <S.ModalInput type="text" name="first-last" id="first-last" placeholder="Фамилия (необязательно)"
                            value={surname}
                            onChange={(event) => {
                                setSurname(event.target.value);
                            }} />
                        <S.ModalInput type="text" name="city" id="city" placeholder="Город (необязательно)"
                            value={city}
                            onChange={(event) => {
                                setCity(event.target.value);
                            }} />
                        <p>  {error ? `${error}` : ''}  </p>
                        <S.ModalButtonSignap id="SignUpEnter" onClick={() => handleRegister({ email, password, name, city, surname })} style={{ backgroundColor: '#009EE4', сolor: '#ffffff' }}>Зарегистрироваться</S.ModalButtonSignap>
                    </S.ModalFormLogin>
                </S.ModalBlock >}

        </>

    )
}