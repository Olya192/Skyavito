import { styled } from 'styled-components'

export const MainH2 = styled.h2`
font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  @media screen and (max-width: 620px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`

export const MainProfile = styled.div`
 width: 100%;
  padding: 0 0 70px;

  @media screen and (max-width: 620px) {
     width: 100%;
    padding: 0 0 40px;
  }
`
export const ProfileContent = styled.div`
max-width: 834px;
  @media screen and (max-width: 620px) {
    max-width: 834px;
    width: 100%;
  }
`

export const ProfileTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 620px) {
    font-size: 18px;
    line-height: 1;
  }
`

export const ProfileSettings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
      -ms-flex-align: top;
          align-items: top;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;

  @media screen and (max-width: 620px) {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
`
