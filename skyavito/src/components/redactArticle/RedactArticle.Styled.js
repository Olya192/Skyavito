import { styled } from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #F4F5F6;

`
export const Backdrop = styled.div`
  background-color: black;
  opacity: 0.5;
  z-index: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const ModalTitle = styled.h3`
    &::before {
        border-top: 2px solid #0080C1;
        border-left: 2px solid #0080C1;
    }
`
export const ModalBlock = styled.div`
      position: absolute;
  z-index: 5;
  left: calc(50% - (600px/2));
  top: 60px;
  opacity: 1;
  @media screen and (max-width: 600px){
    position: absolute;
    z-index: 5;
    left: 0px;
    top: 55px;
    opacity: 1;
    margin: auto;
    width: 100%;
  }
`
export const ModalContent = styled.div`
    display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #FFFFFF;
  border-radius: 12px;
  position: relative;
  @media screen and (max-width: 600px){
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    width: 100%;
    height: auto;
    padding: 30px 20px 30px;
    @media screen and (max-width: 330px){
      width: 270px;
      margin: auto;
  }
  }
`
export const ModalBtnClose = styled.div`
   width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
`
export const ModalBtnCloseLine = styled.div`
    position: relative;
  width: 100%;
  height: 100%;
  &:hover::after,&:hover::before{
    background-color: #0080C1;
   }
   &::after, &::before{
    content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #D9D9D9;
  top: 47%;
  right: -4px;
   }
   &::before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
&::after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}
`
export const ModalForm = styled.form`
   margin-top: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 100%;
  label {
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
  @media screen and (max-width: 600px){
    margin-top: 22px;
  }
`
export const FormNewArtBlock = styled.form`
   width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 20px;

  @media screen and (max-width: 600px){
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-bottom: 18px;
  }
`
export const FormNewArtInput = styled.input`
   padding: 13px 19px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  &::-webkit-input-placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;}
  &:-ms-input-placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
}
&::-ms-input-placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
}
&::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
}
  @media screen and (max-width: 600px){
    padding: 9px 17px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    &::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
  &:-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
  &::-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
  }
  @media screen and (max-width: 330px){
    width: 200px;
  }
`
export const FormNewArtArea = styled.textarea`
  padding: 13px 19px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;
  &::-webkit-input-placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
  &:-ms-input-placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
}
&::-ms-input-placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
}
&::placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
}
}
  @media screen and (max-width: 600px){
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-height: 107px;
    &::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
  &:-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
  &::-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
  }

  }
  @media screen and (max-width: 330px){
    width: 200px;
  }
`
export const FormNewArtP = styled.p`
   font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
  span {
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
}
  @media screen and (max-width: 600px){
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
    span {
    display: block;
    margin-left: 0px;
    color: rgba(0, 0, 0, 0.3);
  }
  }
`
export const FormNewArtBarImg = styled.div`
   width: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
  @media screen and (max-width: 600px){
    width: 278px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: start;
    margin: 0px -5px 10px;
    overflow: hidden;
  }
`
export const FormNewArtImg = styled.div`
   width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
  img {
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
     object-fit: cover;
  z-index: 2;
}
  @media screen and (max-width: 600px){
    display: block;
    width: 50px;
    height: 50px;
    background-color: #F0F0F0;
    margin: 0 5px;
    img {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
       object-fit: cover;
  }
  }
`
export const ImgCardInput = styled.input`
display: none;
`
export const FormNewArtImgCover = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #F0F0F0;
  z-index: -1;
&::after, &::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #D9D9D9;
  top: 50%;
  right: calc(50% - (30px/2));
}
&::before {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
`
export const FormNewArtBlockPrise = styled(FormNewArtBlock)`
  position: relative;
`
export const FormNewArtInputPrise = styled.input`
  padding: 9px 17px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &::-webkit-input-placeholder {
  text-align: end;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
&:-ms-input-placeholder {
  text-align: end;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
&::-ms-input-placeholder {
  text-align: end;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
&::placeholder {
  text-align: end;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
    @media screen and (max-width: 600px){
        width: 100%;
        padding: 9px 17px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    & ::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  &:-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  &::-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  }
  @media screen and (max-width: 330px){
    width: 200px;
  }
`
export const FormNewArtInputPriseCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #FFFFFF;
&::after {
  content: "\A0 \20BD";
  width: 24px;
  height: 24px;
  position: absolute;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  z-index: 2;
}
    @media screen and (max-width: 600px){
        width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;
    &::after {
    font-size: 14px;
    line-height: 21px;
  }
  }
`
export const FormNewArtButton = styled.button`
  margin-top: 10px;
  width: 181px;
  height: 50px;
  background-color: #009EE4;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  &:hover{background: #0080c1;
  border: 1px solid #FFFFFF;} 
    @media screen and (max-width: 600px){
        margin-top: 10px;
    width: 100%;
    height: 46px;
  }

`






