import { Link } from 'react-router-dom'
import * as S from './CardsItem.Styled'
import img from '../../img/photo_2023-11-10_21-58-33.jpg'
import { useNavigate } from 'react-router-dom'

export const CardsItem = ({ card }) => {
    const navigate = useNavigate()

    return (
        <S.CardsItem onClick={() => navigate(`/article/${card.id}`)}>
            <S.CardsCard>
                <S.CardsImage >
                    <S.CardTitleLink>
                         <S.Image src={card?.images?.length > 0 ? `http://127.0.0.1:8090/${card?.images[0]?.url}` : img } alt="picture" />
                    </S.CardTitleLink>
                </S.CardsImage>
                <S.CardText>
                    <Link >
                     <S.CardTitle>{card?.title}</S.CardTitle>
                    </Link>
                    <S.CardPrise>{card?.price} ₽</S.CardPrise>
                    <S.CardPlase>{card?.user?.city}</S.CardPlase>
                    <S.CardDate>{new Date(card?.created_on).toLocaleDateString()}</S.CardDate>
                </S.CardText>
            </S.CardsCard>
        </S.CardsItem>
    )
}
