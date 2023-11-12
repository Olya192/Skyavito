import { useMemo, useState } from 'react'
import * as S from './RedactArticle.Styled.js'
import {patchRedactAds, postNewImgAds } from '../../api.js'


export const RedactArticle = ({ handModalAds, open, card }) => {

    const [description, setDescription] = useState(card.description)
    const [title, setTitle] = useState(card.title)
    const [price, setPrice] = useState(card.price)
    const [images, setImages] = useState({})
    const [loading, setLoading] = useState(false)

    const save = useMemo(() => {
        if (title !== card.title || description !== card.description || price !== card.price || Object.keys(images).length > 0) {
            return false
        } else return true
    }, [title, card.title, card.description, card.price, description, price, Object.keys(images).length])



    const redactCard = async () => {
        setLoading(true)
        const post = await patchRedactAds(title, description, price, card.id)
        const keys = Object.keys(images)
        if (keys.length > 0) {
            for (const key in images) {
                const formData = new FormData();
                formData.append('file', images[key]);
                await postNewImgAds(formData, post.id);
            }
        }
        setLoading(false)
    }

    const handleImg = (event) => {
        console.log('1')
        event.preventDefault();
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            console.log('Файл не выбран');
        } else {
            setImages((prev) => ({ ...prev, [event.target.id]: selectedFile }))
        };
        console.log('2', selectedFile)
    }

    console.log(images)

    return (

        <S.ModalBlock style={{ visibility: open ? 'hidden' : 'visible' }}>
            <S.ModalContent>
                <S.ModalTitle>Новое объявление</S.ModalTitle>
                <S.ModalBtnClose>
                    <S.ModalBtnCloseLine onClick={handModalAds}></S.ModalBtnCloseLine>
                </S.ModalBtnClose>
                <S.ModalForm id="formNewArt" action="#" onSubmit={(e) => e.preventDefault()}>
                    <S.FormNewArtBlock>
                        <label for="name">Название</label>
                        <S.FormNewArtInput type="text" name="name" id="formName" placeholder="Введите название"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }} />
                    </S.FormNewArtBlock>
                    <S.FormNewArtBlock>
                        <label for="text">Описание</label>
                        <S.FormNewArtArea name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}></S.FormNewArtArea>
                    </S.FormNewArtBlock>
                    <S.FormNewArtBlock>
                        <S.FormNewArtP>Фотографии товара<span>не более 5 фотографий</span></S.FormNewArtP>
                        <S.FormNewArtBarImg>
                            <S.FormNewArtImg >
                                <img src={images['upload1'] ? URL.createObjectURL(images['upload1']) : ''} alt="" />
                                <S.FormNewArtImgCover for="upload1"></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="upload1" name="photo" type="file" placeholder="" onChange={handleImg} />

                            <S.FormNewArtImg >
                                <img src={images['upload2'] ? URL.createObjectURL(images['upload2']) : ''} alt="" />
                                <S.FormNewArtImgCover for="upload2"></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="upload2" name="photo" type="file" placeholder="" onChange={handleImg} />

                            <S.FormNewArtImg>
                                <S.FormNewArtImgCover for="upload3"></S.FormNewArtImgCover>
                                <img src={images['upload3'] ? URL.createObjectURL(images['upload3']) : ''} alt="" />
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="upload3" name="photo" type="file" placeholder="" onChange={handleImg} />

                            <S.FormNewArtImg>
                                <S.FormNewArtImgCover for="upload4"></S.FormNewArtImgCover>
                                <img src={images['upload4'] ? URL.createObjectURL(images['upload4']) : ''} alt="" />
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="upload4" name="photo" type="file" placeholder="" onChange={handleImg} />

                            <S.FormNewArtImg>
                                <S.FormNewArtImgCover for="upload5"></S.FormNewArtImgCover>
                                <img src={images['upload5'] ? URL.createObjectURL(images['upload5']) : ''} alt="" />
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="upload5" name="photo" type="file" placeholder="" onChange={handleImg} />

                        </S.FormNewArtBarImg>
                    </S.FormNewArtBlock>
                    <S.FormNewArtBlockPrise >
                        <label for="price">Цена</label>
                        <S.FormNewArtInputPrise type="text" name="price" id="formName"
                            value={price}
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }} />
                        <S.FormNewArtInputPriseCover></S.FormNewArtInputPriseCover>
                    </S.FormNewArtBlockPrise>

                    <S.FormNewArtButton id="btnPublish" onClick={redactCard} disabled={loading || save}>{loading ? 'Загружаем' : 'Опубликовать'}</S.FormNewArtButton>

                </S.ModalForm>
            </S.ModalContent>
        </S.ModalBlock>


    )
}