import { useMemo, useState } from 'react';
import * as S from './ProfileForm.Styled'
import { postNewUserInfo } from '../../api';

export const ProfileForm = ({ user }) => {

    const [name, setName] = useState(user.name);
    const [surname, setSurname] = useState(user.surname);
    const [city, setCity] = useState(user.city);
    const [phone, setPhone] = useState(user.phone);
    const [error, setError] = useState(null);

    const save = useMemo(() => {
        if (name !== user.name || surname !== user.surname || city !== user.city || phone !== user.phone) {
            return false
        } else return true
    }, [city, name, phone, surname, user.city, user.name, user.phone, user.surname])

    const handleUserInfo = async () => {
        try {
            console.log('Старт');
            const UserInfo = await postNewUserInfo(phone, name, city, surname)
            localStorage.setItem("user", JSON.stringify(UserInfo))
            console.log('Все ок');
        } catch (error) {
            setError(error?.message)
        }
    };


    return (
        <S.SettingsRight>
            <S.SettingsForm action="#" onSubmit={(e)=> e.preventDefault()}>
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
                            setPhone(event.target.value);
                        }} />
                </S.SettingsDiv>

                <S.SettingsButton id="settings-btn" disabled={save} onClick={() => handleUserInfo()} >Сохранить</S.SettingsButton>
            </S.SettingsForm>
        </S.SettingsRight>
    )

    //{"id":10,"name":"","email":"bag12345@gmail.com","city":"","avatar":null,"sells_from":null,"phone":null,"role":"user","surname":null}

}