import { ReviewsPost } from "./ReviewsPost"
import * as S from './Reviews.Styled'
import { useMemo, useState } from "react"
import { postNewCardComments } from "../../api"


export const Reviews = ({ handModal, open, comments, updateComments, cardId }) => {

    const [text, setText] = useState('')
      const user = localStorage.getItem("user") || ''

    const handleNewComments = () => {
        postNewCardComments(cardId, text)
            .then(() => updateComments())
            .then(() => setText(''))
    }

    const comment = useMemo(() => {
            if (text !== '') {
            return false
        } else return true
    }, [text])


    return (
        <S.ModalBlock style={{ visibility: open ? 'hidden' : 'visible' }}>
             <S.Backdrop onClick={handModal} />
            <S.ModalContent>
                <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                <S.ModalClose>
                    <S.ModalCloseLine onClick={handModal} ></S.ModalCloseLine>
                </S.ModalClose>
                <S.ModalScroll>
                    {user ?

                        <S.ModalFormNewArt id="formNewArt" action="#" onSubmit={(e) => e.preventDefault()} >
                            <S.FormNewArtBlock>
                                <label for="text" >Добавить отзыв</label>
                                <S.FormNewArtTextarea name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"
                                    value={text}
                                    onChange={(event) => {
                                        setText(event.target.value);
                                    }}></S.FormNewArtTextarea>
                            </S.FormNewArtBlock>
                            <S.FormNewArtButton id="btnPublish" onClick={handleNewComments} disabled={comment}>Опубликовать</S.FormNewArtButton>
                        </S.ModalFormNewArt>

                        : <></>
                    }

                    {comments?.length > 0 ? comments?.map((comment, index) => (<ReviewsPost key={index} comment={comment} />)) : 'Коментарии отсутствуют'}


                </S.ModalScroll>
            </S.ModalContent>
        </S.ModalBlock>
    )
}