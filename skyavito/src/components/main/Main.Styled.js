import { styled } from 'styled-components'

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
  @media screen and (max-width: 590px) {
    padding: 30px 24px 20px 18px;
  }
`
export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  &:hover::before {
  border-top: 2px solid #0080C1;
  border-left: 2px solid #0080C1;
}
@media screen and (max-width: 590px) {
  font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    margin-top: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
     }
`

export const MainContent = styled.div`
    width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 590px) {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: fixed;
    right: 0;
    left: 0;
    top: 134px;
    bottom: 84px;
  }

`

export const ContentCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: repeat(4, 270px);
      grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  overflow-y: auto;
  scrollbar-color: #FFFFFF #2E2E2E;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 922px;
   &::-webkit-scrollbar {
  width: 0px;
  background-color: #009EE4;
}
&::-webkit-scrollbar-thumb {
  background-color: #0080C1;
  border-radius: 3px;
}
@media screen and (max-width: 1158px) {
      display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(3, 270px);
        grid-template-columns: repeat(3, 270px);
        height: -webkit-fill-available;
 }
 @media screen and (max-width: 890px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(2, 137px);
        grid-template-columns: repeat(2, 137px);
}
  @media screen and (max-width: 590px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(2, 137px);
        grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
            display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(2, 270px);
        grid-template-columns: repeat(2, 270px);
        display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(3, 270px);
        grid-template-columns: repeat(3, 270px);
  }
  @media screen and (max-width: 330px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(2, 137px);
        grid-template-columns: repeat(2, 137px);
     
  }

`