import { Link } from 'react-router-dom';
import * as S from './Singin.Styled'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const Singing = ({ open }) => {
    const navigate = useNavigate()
    const [userReg, setUserReg] = useState(false)
    const handReg = () => setUserReg(prev => !prev)
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleLogin = async () => {
        try {
          console.log('Старт');
          const user = await postAuth(email, password)
          const token = await postToken(email, password)
          setUser(user)
          localStorage.setItem("tokenRefresh", token.refresh)
          localStorage.setItem("token", token.access)
          localStorage.setItem("user", JSON.stringify(user))
          console.log('Все ок');
          navigate('/');
        } catch (error) {
          setError(error?.message)
        }
      };


    return (

        <>
            {!userReg ?
                < S.ModalBlock style={{ visibility: open ? 'hidden' : 'visible' }} >
                    <S.ModalFormLogin id="formLogIn" action="#">
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
                        <S.ModalButtonEnter id="btnEnter" onClick={() => handleLogin({ email, password })}> <Link to='/'>Войти</Link> </S.ModalButtonEnter>
                        <S.ModalButtonSignap id="btnSignUp" onClick={handReg}><Link to='/'>Зарегистрироваться</Link> </S.ModalButtonSignap>
                    </S.ModalFormLogin>
                </S.ModalBlock >
                :
                <S.ModalBlock style={{ visibility: open ? 'hidden' : 'visible' }} >
                    <S.ModalFormLogin id="formLogUp" action="#">
                        <S.ModalLogo>
                            <img src="../img/logo_modal.png" alt="logo" />
                        </S.ModalLogo>
                        <S.ModalInput type="text" name="login" id="loginReg" placeholder="email" />
                        <S.ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                        <S.ModalInput type="password" name="password" id="passwordSecond" placeholder="Повторите пароль" />
                        <S.ModalInput type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)" />
                        <S.ModalInput type="text" name="first-last" id="first-last" placeholder="Фамилия (необязательно)" />
                        <S.ModalInput type="text" name="city" id="city" placeholder="Город (необязательно)" />
                        <S.ModalButtonSignap id="SignUpEnter"><Link to='/'>Зарегистрироваться</Link> </S.ModalButtonSignap>
                    </S.ModalFormLogin>
                </S.ModalBlock>}

        </>

    )
}