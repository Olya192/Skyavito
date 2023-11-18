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


    const updateUserCard = () => {
        getCardsUser()
            .then((cards) => {
                setUserCards(cards)
            })
    }

    useEffect(() => {
        updateUserCard()
    }, [])


    return (
        <S.SettingsInput>
            <UserProfile user={user} updateUserCard={updateUserCard}/>
            <div class="content__cards cards">

                <S.ContentCards>
                    {userCards?.map((card, index) => (<CardsItem key={index} card={card} />))}
                </S.ContentCards>

            </div>
        </S.SettingsInput>

    )
}