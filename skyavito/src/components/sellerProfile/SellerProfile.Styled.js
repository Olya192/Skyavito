import { styled } from 'styled-components'

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
 }
 @media screen and (max-width: 890px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(2, 270px);
        grid-template-columns: repeat(2, 270px);
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
@media screen and (max-width: 580px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0 0 0 26px;
    margin-bottom: 20px;
    position: relative;

&::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: transparent;
        -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    position: absolute;
    top: 9px;
    left: 0;
    cursor: pointer;
  }
}
`
export const MainTitle = styled.h3`
margin-bottom: 20px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  color: #000000;

@media screen and (max-width: 580px) {
     font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
  }
`
export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;

@media screen and (max-width: 580px) {
    width: 100%;
    margin: 0 auto;
  }
`
export const Seller = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
  @media screen and (max-width: 890px) {
    padding: 85px 0px 84px;
  }
  @media screen and (max-width: 620px) {
    padding: 85px 0px 84px;
  }
  @media screen and (max-width:330px) {
    margin-left: 14px;
  }

`
