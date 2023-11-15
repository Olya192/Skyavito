import { useEffect } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { MainHeader } from "../main_header/MainHeader";
import { useDispatch } from 'react-redux'
import { getCards } from "../../api";
import { setAds } from "../../store/actions/creators/adsCreators";
import { useParams } from "react-router-dom";
import { useState } from 'react'

export function Container({ children }) {

    const dispatch = useDispatch()
    const setCards = (el) => dispatch(setAds(el))
    const params = useParams()
    const [modal, setModal] = useState(true)
    const handModal = () => setModal(prev => !prev)

    useEffect(() => {
        getCards()
            .then((cards) => {
                setCards(cards)
            })
    }, [])


    return (
        <>
            <Header handModal= {handModal} modal= {modal}></Header>
            <main class="main">
                <MainHeader></MainHeader>
                {children}
            </main>
            <Footer handModal={handModal}></Footer>

        </>
    )








}