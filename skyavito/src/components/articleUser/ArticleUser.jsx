import * as S from './ArticleUser.Styled'
import img from '../../img/photo_2023-11-10_21-58-33.jpg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { deleteUserAds } from '../../api'


export const ArticleUser = ({ handModal, card, comments, handModalAds }) => {

    const navigate = useNavigate()

    const user = localStorage.getItem("user") || ''

    const [myAds, setMyAds] = useState(false)
    const [phone, setPhone] = useState(false)

    const openNumber = () => setPhone(prev => !prev)

    useEffect(() => {
        if (user?.id === card?.user?.id) {
            setMyAds(true)
        }
    }, [])

    const message = useMemo(() => {

        if (comments === null) {
            return 'загружаем'
        }
        const number = comments?.length || 0
        return number > 0 ? `отзывы ${number}` : 'Отзывов нет'
    }, [comments])

    const deleteAds = () => {
        deleteUserAds(card.id)
        navigate('/')
    }

    console.log(comments)



    return (
        <S.ArticleRight>
            <S.ArticleBlock>
                <S.ArticleTitle>{card?.title}</S.ArticleTitle>
                <S.ArticleInfo>
                    <S.ArticleData>{card?.created_on}</S.ArticleData>
                    <S.ArticleData>{card?.user?.city}</S.ArticleData>
                    <S.ArticleLink onClick={handModal} > {message} </S.ArticleLink>
                </S.ArticleInfo>
                <S.ArticlePrice>{card?.price} ₽</S.ArticlePrice>
                {myAds ? <S.ArticleButtonDiv><S.ArticleButton onClick={handModalAds}><span>Редактировать</span></S.ArticleButton>
                    <S.ArticleButton onClick={deleteAds}><span>Удалить обьявление</span></S.ArticleButton></S.ArticleButtonDiv> :
                    <S.ArticleButton onClick={openNumber}>Показать&nbsp;телефон
                        {phone? <span>{card?.user?.phone}</span> : <span>XXXXXXXXXXXX</span>}
                    </S.ArticleButton>
                }
                <S.ArticleAuthor>
                    <S.ArticleImg>
                        <img src={card?.user?.avatar > 0 ? `http://127.0.0.1:8090/${card?.user?.avatar}` : img} alt="" />
                    </S.ArticleImg>
                    <S.AuthorCont>
                        <S.AuthorName onClick={() => navigate('/seller-profile')}>{card?.user?.name}</S.AuthorName>
                        <S.AuthorAbout>Продает товары с {card?.user?.sells_from}</S.AuthorAbout>
                    </S.AuthorCont>
                </S.ArticleAuthor>
            </S.ArticleBlock>
        </S.ArticleRight>
    )
}