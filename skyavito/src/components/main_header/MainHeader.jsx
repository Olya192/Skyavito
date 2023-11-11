import { useLocation } from 'react-router-dom'
import * as S from './MainHeader.Styled'
import { useNavigate } from 'react-router-dom'

export function MainHeader() {
    const navigate = useNavigate()
    let location = useLocation();



    return (
        <S.MainSearch>
            <S.MainLink to='/'>
                <S.ImgLink src="../../img/logo.png" alt="logo" />
            </S.MainLink>
            <S.MainMobLink to='/'>
                <S.ImgMobLink src="../../img/logo-mob.png" alt="logo" />
            </S.MainMobLink>
            <S.Form action="#">
                {location.pathname === '/'
                    ?
                    <>
                        <S.Input type="search" placeholder="Поиск по объявлениям" name="search" />
                        <S.InputMob type="search" placeholder="Поиск" name="search-mob" />
                        <S.ButtonInput>Найти</S.ButtonInput>
                    </>
                   :
                    <S.ButtonInput onClick={()=>navigate('/')}>Вернуться на главную</S.ButtonInput>
                }
            </S.Form>

        </S.MainSearch>

    )
}