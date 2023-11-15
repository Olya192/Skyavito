import * as S from './ArticleImg.Styled'
import img from '../../img/photo_2023-11-10_21-58-33.jpg'
import { useState } from 'react'
import { deleteImgAds } from '../../api'
export const ArticleImg = ({ card, myAds, setCard }) => {

    const delImg = (url) => {
        deleteImgAds(card.id, url)
        .then ((data)=> {
            setCard(data)
        })
    }


    return (
        <S.ArticleLeft>
            <S.ArticleFill>
                <S.ArticleImg>
                    <img src={card?.images?.length > 0 ? `http://127.0.0.1:8090/${card?.images[0]?.url}` : img} alt="" />
                </S.ArticleImg>
                <S.ArticleImgBar>
                    {card.images?.map((img, index) => (<S.ArticleImgDiv>
                        <S.ArticleImgBarDiv><img src={`http://127.0.0.1:8090/${img?.url}`} alt="" /> </S.ArticleImgBarDiv>
                        <S.ArticleImgDeleteButton onClick={() => delImg(img.url)} style={{ visibility: myAds ? 'visible' : 'hidden' }}> удалить </S.ArticleImgDeleteButton>
                    </S.ArticleImgDiv>))}
                </S.ArticleImgBar>
                <S.ArticleImgBarMob>
                    <S.ArticleBarMob></S.ArticleBarMob>
                    <S.ArticleBarMob></S.ArticleBarMob>
                    <S.ArticleBarMob></S.ArticleBarMob>
                    <S.ArticleBarMob></S.ArticleBarMob>
                    <S.ArticleBarMob></S.ArticleBarMob>
                </S.ArticleImgBarMob>
            </S.ArticleFill>
        </S.ArticleLeft>
    )
}