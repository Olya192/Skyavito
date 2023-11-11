import { CardsItem } from "../cards/CardsItem"
import { cards } from "../main/cards"
import { SellerUser } from "../sellerUser/SellerUser"
import * as S from './SellerProfile.Styled'

export const SellerProfile = () => {

    return (
        <S.Seller>
            <S.MainH2>Профиль продавца</S.MainH2>

            <SellerUser />

            <S.MainTitle>
                Товары продавца
            </S.MainTitle>

            <S.MainContent>

                <S.ContentCards>
                    {cards?.map((card, index) => (<CardsItem key={index} card={card} />))}
                </S.ContentCards>

            </S.MainContent>
        </S.Seller>

    )
}