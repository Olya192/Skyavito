import { useSelector } from "react-redux"
import { getCards, getSetCard } from "../../api"
import { CardsItem } from "../cards/CardsItem"
import * as S from './Main.Styled'

import { getAdsList, getSearchList } from "../../store/selectors/AdsSelectors"
import { setSelectAds } from "../../store/actions/creators/adsCreators"
import { useDispatch } from 'react-redux'
import { useState } from "react"
import { Container } from "../container/Container"

export function Main() {

    const searchedCards = useSelector(getSearchList)
    console.log(searchedCards)



    return (
        <Container>
            <S.MainContainer>

                <S.MainH2>Объявления</S.MainH2>

                <S.MainContent>

                    <S.ContentCards >
                        {searchedCards?.map((card, index) => (<CardsItem key={index} card={card} />))}
                    </S.ContentCards>
                </S.MainContent>

            </S.MainContainer>
        </Container>

    )








}