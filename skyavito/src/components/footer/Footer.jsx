import { Link } from 'react-router-dom'
import * as S from './Footer.Styles'

export const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContainer>
                <S.FooterImg>
                    <Link to =''>
                        <img src="../../img/icon_01.png" alt="home" />
                    </Link>
                </S.FooterImg>
                <S.FooterImg>
                    <Link to =''>
                        <img src="../..//img/icon_02.png" alt="home" />
                    </Link>
                </S.FooterImg>
                <S.FooterImg>
                    <Link to =''>
                        <img src="../../img/icon_03.png" alt="home" />
                    </Link>
                </S.FooterImg>
            </S.FooterContainer>
        </S.Footer>
    )
}