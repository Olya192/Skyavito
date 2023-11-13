import { Link } from 'react-router-dom'
import * as S from './Footer.Styles'

export const Footer = () => {

    const user = localStorage.getItem("token")

    return (
        <S.Footer>
            <S.FooterContainer>
                <S.FooterImg>
                    <Link to ='/'>
                        <img src="../../img/icon_01.png" alt="home" />
                    </Link>
                </S.FooterImg>
                <S.FooterImg>
                    <Link to =''>
                        <img src="../..//img/icon_02.png" alt="" />
                    </Link>
                </S.FooterImg>
                <S.FooterImg>
                    <Link to ={user? '/profile' : ''}>
                        <img src="../../img/icon_03.png" alt="home" />
                    </Link>
                </S.FooterImg>
            </S.FooterContainer>
        </S.Footer>
    )
}