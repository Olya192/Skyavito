import { ProfileForm } from "../profileForm/ProfileForm"
import { UserCards } from "../userCard/UserCard"
import * as S from './UserProfile.styled'

export const UserProfile = () => {
    return (
        <>
            <S.MainH2>Здравствуйте, Антон!</S.MainH2>
            <S.MainProfile>
                <S.ProfileContent>
                    <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                    <S.ProfileSettings>
                        <UserCards />
                        <ProfileForm />
                    </S.ProfileSettings>
                </S.ProfileContent>
            </S.MainProfile>
        </>

    )
}