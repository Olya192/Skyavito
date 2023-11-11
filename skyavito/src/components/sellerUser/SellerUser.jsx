import { Link } from 'react-router-dom'
import * as S from './SellerUser.Styled'


export const SellerUser = () => {
    return (
        <S.MainProfileSell>
            <S.ProfileSellContent>
                <S.ProfileSellSeller>
                    <S.SellLeft>
                        <S.SellerImg>
                            <Link to="">
                                <img src="#" alt="" />
                            </Link>
                        </S.SellerImg>
                    </S.SellLeft>
                    <S.SellerRight>
                        <S.SellerTitle>Кирилл Матвеев</S.SellerTitle>
                        <S.SellerCityInf>Санкт-Петербург</S.SellerCityInf>
                        <S.SellerCityInf>Продает товары с августа 2021</S.SellerCityInf>

                        <S.SellerImgMobBlock>
                            <S.SellerImgMob>
                                <Link to="">
                                    <img src="#" alt="" />
                                </Link>
                            </S.SellerImgMob>
                        </S.SellerImgMobBlock>

                        <S.SellerButton>Показать&nbsp;телефон
                            <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                        </S.SellerButton>
                    </S.SellerRight>
                </S.ProfileSellSeller>
            </S.ProfileSellContent>
        </S.MainProfileSell>
    )
}