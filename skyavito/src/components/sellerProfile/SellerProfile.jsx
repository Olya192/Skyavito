import { useEffect, useState } from "react"
import { CardsItem } from "../cards/CardsItem"
import { SellerUser } from "../sellerUser/SellerUser"
import * as S from './SellerProfile.Styled'
import { useSelector } from "react-redux"
import { getSelectList } from "../../store/selectors/AdsSelectors"
import { getCards } from "../../api"

export const SellerProfile = () => {

    const selcard = useSelector(getSelectList)
    const [sellerCards, setSellerCards] = useState([])

    useEffect(() => {
        console.log("useEffect")
        getCards(selcard.user_id)
            .then((cards) => {
                setSellerCards(cards)
            })
    }, [])

console.log(sellerCards)



    return (
        <S.Seller>
            <S.MainH2>Профиль продавца</S.MainH2>

            <SellerUser card={selcard} />

            <S.MainTitle>
                Товары продавца
            </S.MainTitle>

            <S.MainContent>

                <S.ContentCards>
                    {sellerCards?.map((card, index) => (<CardsItem key={index} card={card} />))}
                </S.ContentCards>

            </S.MainContent>
        </S.Seller>

    )
}