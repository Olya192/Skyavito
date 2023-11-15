import { Link, useNavigate } from 'react-router-dom'
import * as S from './Footer.Styles'


export const Footer = ({ handModal }) => {
    const navigate = useNavigate()
    const user = () => localStorage.getItem("token")


    const HendlMobileModal = () => {
        if (user()) {
            navigate('/profile')
        } else {
            handModal()
        }
    }


    return (
        <S.Footer>
            <S.FooterContainer>
                <S.FooterImg>
                    <Link to='/'>
                        <img src="../../img/icon_01.png" alt="home" />
                    </Link>
                </S.FooterImg>
                <S.FooterImg onClick={handModal} style={{ visibility: user() ? 'visible' : 'hidden' }}>
                    <Link to=''>
                        <img src="../..//img/icon_02.png" alt="" />
                    </Link>
                </S.FooterImg>
                <S.FooterImg onClick={HendlMobileModal}>
                    <Link >
                        <img   src="../../img/icon_03.png" alt="home" />
                    </Link>
                </S.FooterImg>
            </S.FooterContainer>
        </S.Footer>
    )
}