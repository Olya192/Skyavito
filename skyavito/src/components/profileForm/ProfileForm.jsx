import { useMemo, useState } from 'react';
import * as S from './ProfileForm.Styled'
import { postNewUserInfo, putUserPassword } from '../../api';

export const ProfileForm = ({ user, updateUserCard }) => {

    const [name, setName] = useState(user.name);
    const [surname, setSurname] = useState(user.surname);
    const [city, setCity] = useState(user.city);
    const [phone, setPhone] = useState(user.phone);
    const [error, setError] = useState(null);
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    const save = useMemo(() => {
        if (name !== user.name || surname !== user.surname || city !== user.city || phone !== user.phone) {
            return false
        } else return true
    }, [city, name, phone, surname, user.city, user.name, user.phone, user.surname])

    const password = useMemo(() => {
        if (passwordOne !== '' || passwordTwo !== '') {
            return false
        } else return true
    }, [passwordOne, passwordTwo])

    function validateTel(phone) {
        var re = /^[+]\d{0,12}$/;
        return re.test(phone);
    }


    const handleUserInfo = async () => {
        try {
            console.log('Старт');
            const UserInfo = await postNewUserInfo(phone, name, city, surname)
            localStorage.setItem("user", JSON.stringify(UserInfo))
            updateUserCard()
            console.log('Все ок');
        } catch (error) {
            setError(error?.message)
        }
    };

    const handleUserPassword = async () => {
        try {
            console.log('Старт');
            putUserPassword(passwordOne, passwordTwo)
            console.log('Все ок');
        } catch (error) {
            setError(error?.message)
        }
    };


    return (
        <S.SettingsRight>
            <S.SettingsForm action="#" onSubmit={(e) => e.preventDefault()}>
                <S.SettingsName>
                    <S.SettingsDiv>
                        <label for="fname">Имя</label>
                        <S.SettingsInput id="settings-fname" name="fname" type="text" placeholder=""
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }} />
                    </S.SettingsDiv>

                    <S.SettingsDiv>
                        <label for="lname">Фамилия</label>
                        <S.SettingsInput id="settings-lname" name="lname" type="text" placeholder=""
                            value={surname}
                            onChange={(event) => {
                                setSurname(event.target.value);
                            }} />
                    </S.SettingsDiv>
                </S.SettingsName>
                <S.SettingsDiv>
                    <label for="city">Город</label>
                    <S.SettingsInput id="settings-city" name="city" type="text" placeholder=""
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                        }} />
                </S.SettingsDiv>
                <S.SettingsDiv>
                    <label for="phone">Телефон</label>
                    <S.SettingsInput id="settings-phone" name="phone" type="tel" placeholder="+79161234567"
                        value={phone}
                        onChange={(event) => {
                            if (event.target.value === '' || validateTel(event.target.value)) {
                                setPhone(event.target.value)
                            };
                        }} />
                </S.SettingsDiv>
                <S.SettingsButton id="settings-btn" disabled={save} onClick={() => handleUserInfo()} >Сохранить</S.SettingsButton>


                <S.SettingsDiv>
                    <p>Сменить пароль</p>
                    <label for="password_1">Введите пароль</label>
                    <S.SettingsInput id="password_1" name="city" type="password" placeholder="введите пароль"
                        value={passwordOne}
                        onChange={(event) => {
                            setPasswordOne(event.target.value);
                        }} />
                </S.SettingsDiv>
                <S.SettingsDiv>
                    <label for="password_2">Повторите пароль</label>
                    <S.SettingsInput id="password_2" name="phone" type="password" placeholder="повторите пароль"
                        value={passwordTwo}
                        onChange={(event) => {
                            setPasswordTwo(event.target.value);
                        }} />
                </S.SettingsDiv>

                <S.SettingsButton id="settings-btn" disabled={password} onClick={() => handleUserPassword()} >Сохранить</S.SettingsButton>
            </S.SettingsForm>
        </S.SettingsRight>
    )

}