import { useEffect } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { MainHeader } from "../main_header/MainHeader";
import { useDispatch } from 'react-redux'
import { getCards } from "../../api";
import { setAds } from "../../store/actions/creators/adsCreators";

export function Container({ children }) {

    const dispatch = useDispatch()
    const setCards = (el) => dispatch(setAds(el))


    useEffect(() => {
        getCards()
            .then((cards) => {
                setCards(cards)
            })
    }, [])


    return (
        <>
            <Header></Header>
            <main class="main">
                <MainHeader></MainHeader>
                {children}
            </main>
            <Footer></Footer>

        </>
    )








}