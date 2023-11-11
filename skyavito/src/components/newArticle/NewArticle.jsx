import * as S from './NewArticle.Styled.js'


export const NewArticle = ({handModal, open }) => {

    return (

        <S.ModalBlock style={{ visibility: open ? 'hidden' : 'visible' }}>
            <S.ModalContent>
                <S.ModalTitle>Новое объявление</S.ModalTitle>
                <S.ModalBtnClose>
                    <S.ModalBtnCloseLine onClick={handModal}></S.ModalBtnCloseLine>
                </S.ModalBtnClose>
                <S.ModalForm id="formNewArt" action="#">
                    <S.FormNewArtBlock>
                        <label for="name">Название</label>
                        <S.FormNewArtInput type="text" name="name" id="formName" placeholder="Введите название" />
                    </S.FormNewArtBlock>
                    <S.FormNewArtBlock>
                        <label for="text">Описание</label>
                        <S.FormNewArtArea name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"></S.FormNewArtArea>
                    </S.FormNewArtBlock>
                    <S.FormNewArtBlock>
                        <S.FormNewArtP>Фотографии товара<span>не более 5 фотографий</span></S.FormNewArtP>
                        <S.FormNewArtBarImg>
                            <S.FormNewArtImg>
                                <img src="" alt="" />
                                <S.FormNewArtImgCover></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.FormNewArtImg>
                                <img src="" alt="" />
                                <S.FormNewArtImgCover></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.FormNewArtImg>
                                <S.FormNewArtImgCover></S.FormNewArtImgCover>
                                <img src="" alt="" />
                            </S.FormNewArtImg>
                            <S.FormNewArtImg>
                                <S.FormNewArtImgCover></S.FormNewArtImgCover>
                                <img src="" alt="" />
                            </S.FormNewArtImg>
                            <S.FormNewArtImg>
                                <S.FormNewArtImgCover></S.FormNewArtImgCover>
                                <img src="" alt="" />
                            </S.FormNewArtImg>
                        </S.FormNewArtBarImg>
                    </S.FormNewArtBlock>
                    <S.FormNewArtBlockPrise>
                        <label for="price">Цена</label>
                        <S.FormNewArtInputPrise type="text" name="price" id="formName" />
                        <S.FormNewArtInputPriseCover></S.FormNewArtInputPriseCover>
                    </S.FormNewArtBlockPrise>

                    <S.FormNewArtButton id="btnPublish">Опубликовать</S.FormNewArtButton>

                </S.ModalForm>
            </S.ModalContent>
        </S.ModalBlock>


    )
}