import * as S  from './ArticleUser.Styled'
import img from '../../img/photo_2023-11-10_21-58-33.jpg'


export const ArticleUser = ({handleGetComments, card}) => {
    return (
        <S.ArticleRight>
            <S.ArticleBlock>
                <S.ArticleTitle>{card?.title}</S.ArticleTitle>
                <S.ArticleInfo>
                    <S.ArticleData>{card?.created_on}</S.ArticleData>
                    <S.ArticleData>{card?.user?.city}</S.ArticleData>
                    <S.ArticleLink onClick = {() => handleGetComments(card)} >23 отзыва</S.ArticleLink>
                </S.ArticleInfo>
                <S.ArticlePrice>{card?.price} ₽</S.ArticlePrice>
                <S.ArticleButton>Показать&nbsp;телефон 
                    <span>{card?.user?.phone}</span>
                </S.ArticleButton>
                <S.ArticleAuthor>
                    <S.ArticleImg>
                        <img src={card?.user?.avatar > 0 ? `http://127.0.0.1:8090/${card?.user?.avatar}` : img} alt=""/>
                    </S.ArticleImg>
                    <S.AuthorCont>
                        <S.AuthorName>{card?.user?.name}</S.AuthorName>
                        <S.AuthorAbout>Продает товары с {card?.user?.sells_from}</S.AuthorAbout>
                    </S.AuthorCont>
                </S.ArticleAuthor>
            </S.ArticleBlock>
        </S.ArticleRight>
    )
}