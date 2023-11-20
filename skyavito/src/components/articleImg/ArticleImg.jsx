import * as S from './ArticleImg.Styled'
import img from '../../img/photo_2023-11-10_21-58-33.jpg'
import { useEffect, useState } from 'react'
import { deleteImgAds } from '../../api'
export const ArticleImg = ({ card, myAds, setCard }) => {

    const [picture, setPicture] = useState()


    useEffect(() => {
        setPicture(card?.images?.length > 0 ? card?.images[0]?.url : '')
    }, [card.id])


    const delImg = (url) => {
        deleteImgAds(card.id, url)
            .then((data) => {
                setCard(data)
            })
    }

    const changePicture = (url) => {
        setPicture(url)
    }

    const changePictureMob = () => {
        if (!picture) return;
        let index = 0
        card.images.forEach((element, i) => {
            if (element.url === picture){
                index = i 
            }
        });
        console.log('index', index)
        if (index +1 === card.images.length) {
            setPicture(card.images[0].url)
        } else{
              setPicture(card.images[index+1].url)
        }
      
    }



    return (
        <S.ArticleLeft>
            <S.ArticleFill>
                <S.ArticleImg onClick={changePictureMob}>
                    <img src={picture ? `http://127.0.0.1:8090/${picture}` : img} alt="" />
                </S.ArticleImg>
                <S.ArticleImgBar>
                    {card.images?.map((img, index) => (<S.ArticleImgDiv>
                        <S.ArticleImgBarDiv onClick={() => changePicture(img?.url)}><img src={`http://127.0.0.1:8090/${img?.url}`} alt="" /> </S.ArticleImgBarDiv>
                        <S.ArticleImgDeleteButton onClick={() => delImg(img?.url)} style={{ visibility: myAds ? 'visible' : 'hidden' }}> удалить </S.ArticleImgDeleteButton>
                    </S.ArticleImgDiv>))}
                </S.ArticleImgBar>
                <S.ArticleImgBarMob>
                        </S.ArticleImgBarMob>
            </S.ArticleFill>
        </S.ArticleLeft>
    )
}