import { Singing } from '../singin/Singin'
import * as S from './Header.Styles'
import { useNavigate } from 'react-router-dom'
import { NewArticle } from '../newArticle/NewArticle'


export function Header({handModal, modal}) {
    const navigate = useNavigate()
    const user =  localStorage.getItem("token")
    


    const hendelExit = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        localStorage.removeItem("tokenRefresh")
        navigate('/')
    }

    return (
        <>
            <S.Header>
                <S.HeaderNav>{user ?
                    <><S.Button id="btnMainEnter"onClick={handModal}>Разместить обьявление</S.Button>
                        <S.Button id="btnMainEnter"onClick={()=>navigate('/profile')}>Личный кабинет</S.Button>
                        <S.Button id="btnMainEnter"onClick={()=> hendelExit()}>Выход </S.Button></>
                    : <S.Button id="btnMainEnter" onClick={handModal}>Вход в личный кабинет</S.Button>
                }
                </S.HeaderNav>
            </S.Header >
           {user? <NewArticle handModal = {handModal} open={modal}/> :<Singing handModal = {handModal} open={modal}/>} 
            
        </>
    )
}