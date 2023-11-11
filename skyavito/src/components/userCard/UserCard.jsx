import * as S from './UserCard.Styled'
import { Link } from "react-router-dom"

export const UserCards = () => {
    return (
        <S.SettingsLeft>
            <S.SettingsImg>
                <Link to= ''>
                <img src="#" alt=""/>
                </Link>
               
            </S.SettingsImg>
            <S.SettingsChange to =''>
                Заменить
            </S.SettingsChange>
        </S.SettingsLeft>
    )
}