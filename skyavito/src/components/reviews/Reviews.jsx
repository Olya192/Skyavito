import { ReviewsPost } from "./ReviewsPost"
import * as S from './Reviews.Styled'
import { useState } from "react"
import { getSetCardComments, postNewCardComments } from "../../api"
import { useSelector } from "react-redux"
import { getSelectList } from "../../store/selectors/AdsSelectors"

export const Reviews = ({ handModal, open, comments, updateComments }) => {

    const [text, setText] = useState()
    const card = useSelector(getSelectList)

    const handleNewComments = () => {
        postNewCardComments(card.id, text)
            .then(() => updateComments())

    }


    return (
        <S.ModalBlock style={{ visibility: open ? 'hidden' : 'visible' }}>
            <S.ModalContent>
                <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                <S.ModalClose>
                    <S.ModalCloseLine onClick={handModal} ></S.ModalCloseLine>
                </S.ModalClose>
                <S.ModalScroll>
                    <S.ModalFormNewArt id="formNewArt" action="#" onSubmit={(e)=>e.preventDefault()}>
                        <S.FormNewArtBlock>
                            <label for="text" >Добавить отзыв</label>
                            <S.FormNewArtTextarea name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"
                                value={text}
                                onChange={(event) => {
                                    setText(event.target.value);
                                }}></S.FormNewArtTextarea>
                        </S.FormNewArtBlock>
                        <S.FormNewArtButton id="btnPublish" onClick={handleNewComments}>Опубликовать</S.FormNewArtButton>
                    </S.ModalFormNewArt>

                    {comments?.length > 0 ? comments?.map((comment, index) => (<ReviewsPost key={index} comment={comment} />)) : 'Коментарии отсутствуют'}


                </S.ModalScroll>
            </S.ModalContent>
        </S.ModalBlock>
    )
}