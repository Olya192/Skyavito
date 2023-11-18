import { useLocation } from 'react-router-dom'
import * as S from './MainHeader.Styled'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAdsList, getSearchList } from '../../store/selectors/AdsSelectors'
import { setSearchAds } from '../../store/actions/creators/adsCreators'

export function MainHeader() {
    const navigate = useNavigate()
    let location = useLocation();
    const cards = useSelector(getAdsList)
    const dispatch = useDispatch()
    const setSearchedCards = (el) => dispatch(setSearchAds(el))
    const [searchValue, setSearchValue] = useState('')

    const ref = useRef(null);

    const onClear = () => {
        setSearchValue('')
        setSearchedCards(cards)
    }

    const filterCards = () => {
        console.log(searchValue)
        const newCards = cards.filter((i) => {

            return i.title.toLowerCase().includes(searchValue.toLowerCase())
        })

        setSearchedCards(newCards)
    }

    return (
        <S.MainSearch>
            <S.MainLink to='/'>
                <S.ImgLink src="../../img/logo.png" alt="logo" />
            </S.MainLink>
            <S.MainMobLink to='/'>
                <S.ImgMobLink src="../../img/logo-mob.png" alt="logo" />
            </S.MainMobLink>
            <S.Form action="#" onSubmit={(e) => e.preventDefault()}>
                {location.pathname === '/'
                    ?
                    <>
                        <S.Input type="search" placeholder="Поиск по объявлениям" name="search"
                            value={searchValue}
                            ref={ref}
                            onChange={(event) => {
                                setSearchValue(event.target.value);
                                console.log(event)
                            }}
                            onClick={(event) => {
                                const element = ref.current;
                                element.addEventListener('search', onClear);
                                setTimeout(() => element.removeEventListener('search', onClear));
                            }}

                        />
                        <S.InputMob type="search" placeholder="Поиск" name="search-mob"
                            value={searchValue}
                            onChange={(event) => {
                                setSearchValue(event.target.value);
                            }} />
                        <S.ButtonInput onClick={filterCards}>Найти</S.ButtonInput>
                    </>
                    :
                    <S.ButtonInput onClick={() => navigate('/')}>Вернуться на главную</S.ButtonInput>
                }
            </S.Form>

        </S.MainSearch>

    )
}