import { CardsItem } from "../cards/CardsItem"
import { cards } from "../main/cards"
import { UserProfile } from "../userProfile/UserProfile"
import * as S from './Prifile.styled'


export const Profile = () => {
    
    return (
        <S.SettingsInput>
            <UserProfile />
            <div class="content__cards cards">

                <S.ContentCards>
                    {cards?.map((card, index) => (<CardsItem key={index} card={card} />))}
                </S.ContentCards>

            </div>
        </S.SettingsInput>

    )
}