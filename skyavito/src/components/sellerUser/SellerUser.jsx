import { Link } from 'react-router-dom'
import * as S from './SellerUser.Styled'
import img from '../../img/photo_2023-11-10_21-58-33.jpg'

export const SellerUser = ({card}) => {
    
    return (
        <S.MainProfileSell>
            <S.ProfileSellContent>
                <S.ProfileSellSeller>
                    <S.SellLeft>
                        <S.SellerImg>
                            <Link to="">
                                <img src={card?.user?.avatar > 0 ? `http://127.0.0.1:8090/${card?.user?.avatar}` : img} alt="" />
                            </Link>
                        </S.SellerImg>
                    </S.SellLeft>
                    <S.SellerRight>
                        <S.SellerTitle>{card?.user?.name}</S.SellerTitle>
                        <S.SellerCityInf>{card?.user?.name}</S.SellerCityInf>
                        <S.SellerCityInf>Продает товары с {card?.user?.sells_from}</S.SellerCityInf>

                        <S.SellerImgMobBlock>
                            <S.SellerImgMob>
                                <Link to="">
                                    <img src={card?.user?.avatar > 0 ? `http://127.0.0.1:8090/${card?.user?.avatar}` : img} alt="" />
                                </Link>
                            </S.SellerImgMob>
                        </S.SellerImgMobBlock>

                        <S.SellerButton>Показать&nbsp;телефон
                            <span>{card?.user?.phone}</span>
                        </S.SellerButton>
                    </S.SellerRight>
                </S.ProfileSellSeller>
            </S.ProfileSellContent>
        </S.MainProfileSell>
    )
}