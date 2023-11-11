import * as S from './ProfileForm.Styled'

export const ProfileForm = () => {

    return (
        <S.SettingsRight>
            <S.SettingsForm action="#">
                <S.SettingsName>
                    <S.SettingsDiv>
                        <label for="fname">Имя</label>
                        <S.SettingsInput id="settings-fname" name="fname" type="text" value="Ан" placeholder="" />
                    </S.SettingsDiv>

                    <S.SettingsDiv>
                        <label for="lname">Фамилия</label>
                        <S.SettingsInput id="settings-lname" name="lname" type="text" value="Городецкий" placeholder="" />
                    </S.SettingsDiv>
                </S.SettingsName>
                <S.SettingsDiv>
                    <label for="city">Город</label>
                    <S.SettingsInput id="settings-city" name="city" type="text" value="Санкт-Петербург" placeholder="" />
                </S.SettingsDiv>

                <S.SettingsDiv>
                    <label for="phone">Телефон</label>
                    <S.SettingsInput id="settings-phone" name="phone" type="tel" value="89161234567" placeholder="+79161234567" />
                </S.SettingsDiv>

                <S.SettingsButton id="settings-btn">Сохранить</S.SettingsButton>
            </S.SettingsForm>
        </S.SettingsRight>
    )



}