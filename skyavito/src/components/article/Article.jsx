import { ArticleImg } from "../articleImg/ArticleImg"
import { ArticleUser } from "../articleUser/ArticleUser"
import { RedactArticle } from '../redactArticle/RedactArticle'
import * as S from './Article.Styled'
import { Reviews } from "../reviews/Reviews"
import { getSetCard, getSetCardComments } from "../../api"
import { useEffect, useState } from 'react'


import { useNavigate, useParams } from "react-router-dom"
import { Container } from "../container/Container"

export const Article = () => {
    const navigate = useNavigate()
    const params = useParams()

    const [myAds, setMyAds] = useState(false)
    const [card, setCard] = useState({})

    const [modal, setModal] = useState(true)
    const [comments, setComments] = useState(null)
    const [modalAds, setModalAds] = useState(true)
    const handModal = () => setModal(prev => !prev)
    const handModalAds = () => setModalAds(prev => !prev)
    const user = JSON.parse(localStorage.getItem("user"))


    const handleGetComments = () => {
        handModal()
        navigate('/')
    }


    useEffect(() => {
        console.log('user', user)
        console.log('card user', card?.user)
        if (user && user?.id === card?.user?.id) {
            setMyAds(true)
        }
    }, [card?.id])


    useEffect(() => {
        if (!params.id) navigate('/')
        setComments(null)
        updateComments()
        getSetCard(params.id)
            .then((cards) => {
                console.log('cards', cards)
                setCard(cards)
            })
    }, [params.id])

    const updateComments = () => {
        if (params.id)
            getSetCardComments(params.id)
                .then((cardComments) => {
                    console.log(cardComments)
                    setComments(cardComments)
                })
    }



    return (
        <Container>
            <>
                <S.MainArtic>
                    <S.ArticContent>
                        <ArticleImg card={card} myAds={myAds} setCard={setCard} />
                        <ArticleUser handModal={handModal}
                            card={card}
                            handleGetComments={handleGetComments}
                            comments={comments}
                            handModalAds={handModalAds}
                            setComments={setComments}
                            myAds={myAds} />
                    </S.ArticContent>
                </S.MainArtic>

                <S.MainContainer>
                    <S.MainTitle>
                        Описание товара
                    </S.MainTitle>
                    <S.MainContant>
                        <S.MainText>{card?.description !== null ? `${card?.description}` : 'Описание товара отсутствует'}</S.MainText>
                    </S.MainContant>
                </S.MainContainer>

                <Reviews handModal={handModal} open={modal} comments={comments} updateComments={updateComments}  cardId = {params.id}/>
                <RedactArticle open={modalAds} card={card} handModalAds={handModalAds} />

            </>
        </Container>
    )


}