import { useSelector } from "react-redux"
import { getCards, getSetCard } from "../../api"
import { CardsItem } from "../cards/CardsItem"
import * as S from './Main.Styled'

import { getAdsList, getSearchList } from "../../store/selectors/AdsSelectors"
import { setSelectAds } from "../../store/actions/creators/adsCreators"
import { useDispatch } from 'react-redux'
import { useState } from "react"

export function Main() {

    const dispatch = useDispatch()

    const setSelectedAds = (el) => dispatch(setSelectAds(el))
    const searchedCards = useSelector(getSearchList)
    console.log(searchedCards)



    const handleSelectedAds = (card) => {
        getSetCard(card.id)
            .then((setCard) => {
                setSelectedAds(setCard)
            })

    }


    return (
        <S.MainContainer>

            <S.MainH2>Объявления</S.MainH2>

            <S.MainContent>

                <S.ContentCards >
                    {searchedCards?.map((card, index) => (<CardsItem handleSelectedAds={handleSelectedAds} key={index} card={card} />))}
                </S.ContentCards>
            </S.MainContent>

        </S.MainContainer>


    )








}