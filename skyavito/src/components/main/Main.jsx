import { useSelector } from "react-redux"
import { getCards, getSetCard } from "../../api"
import { CardsItem } from "../cards/CardsItem"
import * as S from './Main.Styled'
import { useNavigate } from 'react-router-dom'
import { getAdsList } from "../../store/selectors/AdsSelectors"
import { setSelectAds } from "../../store/actions/creators/adsCreators"
import { useDispatch } from 'react-redux'

export function Main() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cards = useSelector(getAdsList)
    const setSelectedAds = (el) => dispatch(setSelectAds(el))

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

                <S.ContentCards onClick={() => navigate('/article')}>
                    {cards?.map((card, index) => (<CardsItem handleSelectedAds={handleSelectedAds} key={index} card={card} />))}
                </S.ContentCards>
            </S.MainContent>

        </S.MainContainer>


    )








}