import { useEffect, useState } from "react"
import { CardsItem } from "../cards/CardsItem"
import { cards } from "../main/cards"
import { UserProfile } from "../userProfile/UserProfile"
import * as S from './Prifile.styled'
import { getCardsUser } from "../../api"


export const Profile = () => {

    const user = JSON.parse(localStorage.getItem("user")|| '')
    console.log(user)
    const [userCards, setUserCards] = useState([])

    useEffect(() => {
        getCardsUser()
            .then((cards) => {
                setUserCards(cards)
            })
    }, [])


    return (
        <S.SettingsInput>
            <UserProfile user={user} />
            <div class="content__cards cards">

                <S.ContentCards>
                    {userCards?.map((card, index) => (<CardsItem key={index} card={card} />))}
                </S.ContentCards>

            </div>
        </S.SettingsInput>

    )
}