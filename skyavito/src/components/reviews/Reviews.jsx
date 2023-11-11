import { ReviewsPost } from "./ReviewsPost"
import * as S from './Reviews.Styled'

export const Reviews = ({handModal, open, comments }) => {

    return (
        <S.ModalBlock style={{ visibility: open ? 'hidden' : 'visible' }}>
            <S.ModalContent>
                <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                <S.ModalClose>
                    <S.ModalCloseLine onClick = {handModal} ></S.ModalCloseLine>
                </S.ModalClose>
                <S.ModalScroll>
                    <S.ModalFormNewArt id="formNewArt" action="#">
                        <S.FormNewArtBlock>
                            <label for="text">Добавить отзыв</label>
                            <S.FormNewArtTextarea name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"></S.FormNewArtTextarea>
                        </S.FormNewArtBlock>
                        <S.FormNewArtButton id="btnPublish">Опубликовать</S.FormNewArtButton>
                    </S.ModalFormNewArt>

                   {comments?.length > 0? comments?.map((comment, index) => (<ReviewsPost key={index} comment={comment} />)) : 'Коментарии отсутствуют'} 
        

                </S.ModalScroll>
            </S.ModalContent>
        </S.ModalBlock>
    )
}