import { useSelector } from "react-redux"
import { getSelectList } from "../../store/selectors/AdsSelectors"
import { ArticleImg } from "../articleImg/ArticleImg"
import { ArticleUser } from "../articleUser/ArticleUser"
import { RedactArticle } from '../redactArticle/RedactArticle'
import * as S from './Article.Styled'
import { Reviews } from "../reviews/Reviews"
import { getSetCardComments } from "../../api"
import { useEffect, useMemo, useState } from 'react'

import { useNavigate } from "react-router-dom"

export const Article = () => {

const navigate = useNavigate()

    const card = useSelector(getSelectList)
    const cardId = useMemo(() => {
        return card?.id
    }, [card?.id])

    const [modal, setModal] = useState(true)
    const [comments, setComments] = useState(null)
    const [modalAds, setModalAds] = useState(true)
    const handModal = () => setModal(prev => !prev)
    const handModalAds = () => setModalAds(prev => !prev)

    const handleGetComments = () => {
        handModal()
        navigate('./')
    }

    useEffect(() => {
        setComments(null)
        updateComments()
    }, [cardId])

    const updateComments = () => {
        if (cardId)
            getSetCardComments(cardId)
                .then((cardComments) => {
                    console.log(cardComments)
                    setComments(cardComments)
                })
    }







    return (
        <>
            <S.MainArtic>
                <S.ArticContent>
                    <ArticleImg card={card} />
                    <ArticleUser handModal={handModal} card={card} handleGetComments={handleGetComments} comments={comments} handModalAds={handModalAds} />
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

            <Reviews handModal={handModal} open={modal} comments={comments} updateComments={updateComments} />
            <RedactArticle open={modalAds} card={card} handModalAds ={handModalAds}/>

        </>

    )


}