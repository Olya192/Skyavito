import { styled } from 'styled-components'

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (800px/2));
  top: 60px;
  opacity: 1;
  @media screen and (max-width: 600px) {
     position: absolute;
    z-index: 5;
    left: 0px;
    top: 55px;
    opacity: 1;
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
  width: 800px;
  height: auto;
  padding: 20px 92px 57px 50px;
  background-color: #FFFFFF;
  border-radius: 12px;
  position: relative;
  @media screen and (max-width: 600px) {
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
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
`
export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 15px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;
    &::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    position: absolute;
    top: 9px;
    left: 0;
    cursor: pointer;
  }
  }
`
export const ModalClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
`
export const ModalCloseLine = styled.div`
 position: relative;
  width: 100%;
  height: 100%;
  &::after, &::before {
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
&:hover::after, &:hover::before {
  background-color: #0080C1;
}
  @media screen and (max-width: 600px) {
    display: none;
  }
`
export const ModalScroll = styled.div`
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
  overflow-y: auto;
  scrollbar-color: #FFFFFF #2E2E2E;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  &::-webkit-scrollbar {
  width: 0px;
  background-color: #FFFFFF;
}
&::-webkit-scrollbar-thumb {
  background-color: #D9D9D9;
  border-radius: 0px;
}
`
export const  ModalFormNewArt = styled.form`
  margin-top: 5px;
  margin-bottom: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 100%;
  label {
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;
}
  @media screen and (max-width: 600px) {
    margin-top: 22px;
    label {
    display: none;
  }
  }
`
export const  FormNewArtBlock = styled.div`
 width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 14px;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-bottom: 16px;
  }
`
export const  FormNewArtTextarea = styled.textarea`
   font-family: 'Roboto', sans-serif;
  padding: 10px 19px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 100px;
  max-height: 100px;
  &::-webkit-input-placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004D;
}
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
  @media screen and (max-width: 600px) {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-height: 107px;
    padding: 9px 17px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
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
`
export const  FormNewArtButton = styled.button`
  width: 181px;
  height: 50px;
  background: #D9D9D9;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  &:hover {
  background-color: #0080C1;
}
  @media screen and (max-width: 600px) {
    margin-top: 0px;
    width: 100%;
    height: 46px;
    background-color: #009EE4;
  }
`


