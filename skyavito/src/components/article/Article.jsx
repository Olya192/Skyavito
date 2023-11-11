import { useSelector } from "react-redux"
import { getSelectList } from "../../store/selectors/AdsSelectors"
import { ArticleImg } from "../articleImg/ArticleImg"
import { ArticleUser } from "../articleUser/ArticleUser"
import * as S from './Article.Styled'
import { Reviews } from "../reviews/Reviews"
import { getSetCardComments } from "../../api"
import { useState } from 'react'

export const Article = () => {

    const card = useSelector(getSelectList)

    const [modal, setModal] = useState(true)
    const [comments, setComments] = useState()
    const handModal = () => setModal(prev => !prev)


    const handleGetComments = (card) => {
        getSetCardComments(card.id)
            .then((cardComments) => {
                console.log(cardComments)
                setComments(cardComments)
            })
        handModal()
    }


    return (
        <>
            <S.MainArtic>
                <S.ArticContent>
                    <ArticleImg card={card} />
                    <ArticleUser handModal={handModal} card={card} handleGetComments={handleGetComments} />
                </S.ArticContent>
            </S.MainArtic>

            <S.MainContainer>
                <S.MainTitle>
                    Описание товара
                </S.MainTitle>
                <S.MainContant>
                    <S.MainText>{card.description !== null ? `${card.description}` : 'Описание товара отсутствует'}</S.MainText>
                </S.MainContant>
            </S.MainContainer>

            <Reviews handModal={handModal} open={modal} comments={comments} />
        </>

    )


}