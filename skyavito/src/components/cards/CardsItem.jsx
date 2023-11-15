import { Link } from 'react-router-dom'
import * as S from './CardsItem.Styled'
import img from '../../img/photo_2023-11-10_21-58-33.jpg'
import { useNavigate } from 'react-router-dom'

export const CardsItem = ({handleSelectedAds, card }) => {
    const navigate = useNavigate()

    return (
        <S.CardsItem onClick={() => navigate(`/article/${card.id}`)}>
            <S.CardsCard>
                <S.CardsImage onClick={() => handleSelectedAds(card)}>
                    <Link >
                         <S.Image src={card?.images?.length > 0 ? `http://127.0.0.1:8090/${card?.images[0]?.url}` : img } alt="picture" />
                    </Link>
                </S.CardsImage>
                <div class="card__content">
                    <Link to='#' onClick={() => handleSelectedAds(card)}>
                        <S.CardTitle>{card?.title}</S.CardTitle>
                    </Link>
                    <S.CardPrise>{card?.price} ₽</S.CardPrise>
                    <S.CardPlase>{card?.city}</S.CardPlase>
                    <S.CardDate>{new Date(card?.created_on).toLocaleDateString()}</S.CardDate>
                </div>
            </S.CardsCard>
        </S.CardsItem>
    )
}
