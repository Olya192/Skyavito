import { Link } from 'react-router-dom'
import * as S from './CardsItem.Styled'
import img from '../../img/photo_2023-11-10_21-58-33.jpg'

export const CardsItem = ({handleSelectedAds, card }) => {


    return (
        <S.CardsItem>
            <S.CardsCard>
                <S.CardsImage onClick={() => handleSelectedAds(card)}>
                    <Link to='/article' >
                         <S.Image src={card?.images?.length > 0 ? `http://127.0.0.1:8090/${card?.images[0]?.url}` : img } alt="picture" />
                    </Link>
                </S.CardsImage>
                <div class="card__content">
                    <Link to='#' onClick={() => handleSelectedAds(card)}>
                        <S.CardTitle>{card?.title}</S.CardTitle>
                    </Link>
                    <S.CardPrise>{card?.price}</S.CardPrise>
                    <S.CardPlase>{card?.city}</S.CardPlase>
                    <S.CardDate>{card?.created_on}</S.CardDate>
                </div>
            </S.CardsCard>
        </S.CardsItem>
    )
}
