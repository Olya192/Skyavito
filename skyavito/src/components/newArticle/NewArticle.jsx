import { useState } from 'react'
import * as S from './NewArticle.Styled.js'
import { getCards, postNewAds, postNewImgAds } from '../../api.js'
import { useDispatch } from 'react-redux'
import { setAds } from '../../store/actions/creators/adsCreators.js'


export const NewArticle = ({ handModal, open }) => {
    const dispatch = useDispatch()
    const setCards = (el) => dispatch(setAds(el))
    const [description, setDescription] = useState()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [images, setImages] = useState({})
    const [loading, setLoading] = useState(false)

    const newCard = async () => {
        setLoading(true)
        const post = await postNewAds(title, description, price)
        const keys = Object.keys(images)
        if (keys.length > 0) {
            for (const key in images) {
                const formData = new FormData();
                formData.append('file', images[key]);
                await postNewImgAds(formData, post.id);
            }
        }
        handModal()
        setLoading(false)
        getCards()
        .then((cards) => {
            setCards(cards)
        })
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
             <S.Backdrop onClick={handModal} />
            <S.ModalContent>
                <S.ModalTitle>Новое объявление</S.ModalTitle>
                <S.ModalBtnClose>
                    <S.ModalBtnCloseLine onClick={handModal}></S.ModalBtnCloseLine>
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
                                <img src={images['file-upload1'] ? URL.createObjectURL(images['file-upload1']) : ''} alt="" />
                                <S.FormNewArtImgCover for="file-upload1"></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="file-upload1" name="photo" type="file" placeholder="" onChange={handleImg} />

                            <S.FormNewArtImg >
                            <img src={images['file-upload2'] ? URL.createObjectURL(images['file-upload2']) : ''} alt="" />
                                <S.FormNewArtImgCover for="file-upload2"></S.FormNewArtImgCover>
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="file-upload2" name="photo" type="file" placeholder="" onChange={handleImg} />

                            <S.FormNewArtImg>
                                <S.FormNewArtImgCover for="file-upload3"></S.FormNewArtImgCover>
                                <img src={images['file-upload3'] ? URL.createObjectURL(images['file-upload3']) : ''} alt="" />
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="file-upload3" name="photo" type="file" placeholder="" onChange={handleImg} />

                            <S.FormNewArtImg>
                                <S.FormNewArtImgCover for="file-upload4"></S.FormNewArtImgCover>
                                <img src={images['file-upload4'] ? URL.createObjectURL(images['file-upload4']) : ''} alt="" />
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="file-upload4" name="photo" type="file" placeholder="" onChange={handleImg}/>

                            <S.FormNewArtImg>
                                <S.FormNewArtImgCover for="file-upload5"></S.FormNewArtImgCover>
                                <img src={images['file-upload5'] ? URL.createObjectURL(images['file-upload5']) : ''} alt="" />
                            </S.FormNewArtImg>
                            <S.ImgCardInput id="file-upload5" name="photo" type="file" placeholder="" onChange={handleImg}/>

                        </S.FormNewArtBarImg>
                    </S.FormNewArtBlock>
                    <S.FormNewArtBlockPrise>
                        <label for="price">Цена</label>
                        <S.FormNewArtInputPrise type="text" name="price" id="formName"
                            value={price}
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }} />
                        <S.FormNewArtInputPriseCover></S.FormNewArtInputPriseCover>
                    </S.FormNewArtBlockPrise>

                    <S.FormNewArtButton id="btnPublish" onClick={newCard} disabled = {loading}>{loading? 'Загружаем' :'Опубликовать'}</S.FormNewArtButton>

                </S.ModalForm>
            </S.ModalContent>
        </S.ModalBlock>


    )
}