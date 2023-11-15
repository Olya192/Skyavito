import { ProfileForm } from "../profileForm/ProfileForm"
import { UserCards } from "../userCard/UserCard"
import * as S from './UserProfile.styled'

export const UserProfile = ({user}) => {



    return (
        <>
            <S.MainH2>Здравствуйте,{user.name}</S.MainH2>
            <S.MainProfile>
                <S.ProfileContent>
                    <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                    <S.ProfileSettings>
                        <UserCards user={user}/>
                        <ProfileForm user={user}/>
                    </S.ProfileSettings>
                </S.ProfileContent>
            </S.MainProfile>
        </>

    )
}

