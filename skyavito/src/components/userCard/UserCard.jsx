import * as S from './UserCard.Styled'
import { Link } from "react-router-dom"
import img from '../../img/photo_2023-11-10_21-58-33.jpg'
import { postNewAvatar } from '../../api'

export const UserCards = ({user, updateUserCard}) => {

  

    const handleAvatar = async (event) => {
        console.log('1')
        event.preventDefault();
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            console.log('Файл не выбран');
        } else {
            const formData = new FormData();
            formData.append('file', selectedFile);
            const userAvatar = await postNewAvatar(formData);
            localStorage.setItem("user", JSON.stringify(userAvatar))
            updateUserCard()
        };
    }

    return (
        <S.SettingsLeft>
            <S.SettingsImg>
                <Link to=''>
                    <S.AvatarImg src={user?.avatar === null ? img : `http://127.0.0.1:8090/${user?.avatar}`} alt="" />
                </Link>

            </S.SettingsImg>
            <S.SettingsChange for="file-upload">
                Заменить
            </S.SettingsChange>
            <S.inputChange id="file-upload" name="photo" type="file" placeholder="" onChange={handleAvatar} />
        </S.SettingsLeft>
    )
}

