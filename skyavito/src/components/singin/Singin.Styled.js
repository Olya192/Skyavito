import { styled } from 'styled-components'

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (366px/2));
  top: calc(50% - (647px/2));
  opacity: 1;
  @media screen and (max-width: 768px) {
     left: calc(50% - (320px/2));
    top: 55px;
  }
`
export const Backdrop = styled.div`
  background-color: black;
  opacity: 0.5;
  z-index: -1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const ModalFormLogin = styled.form`
  width: 366px;
  background-color: #FFFFFF;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 43px 42px 47px;
  input:first-child {
  margin-bottom: 30px;
}
  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    border-radius: 0px;
    padding: 40px 20px;
  }
`
export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 42px;
  background-color: transparent;
  img {
  width: 140px;
  height: auto;
}
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
    img {
    width: 120px;
    height: auto;
  }
  }
`
export const ModalInput = styled.input`
   width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #D0CECE;
  padding: 8px 1px;
  margin-bottom: 38px;
  &::-webkit-input-placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #D0CECE;
}
&:-ms-input-placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #D0CECE;
}
&::-ms-input-placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #D0CECE;
}
&::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #D0CECE;
}
  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #D9D9D9;
    border-radius: 30px;
    padding: 9px 19px;
    margin-bottom: 14px;
&::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #B3B3B3;
  }
  &:-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #B3B3B3;
  }
  &::-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #B3B3B3;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: #B3B3B3;
  }
  }
`
export const ModalButtonEnter = styled.button`
   width: 278px;
  height: 52px;
  background-color: #009EE4;
  color: #ffffff;
  border-radius: 6px;
  margin-bottom: 20px;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
 &:hover {
        background-color: #0080C1;
      }
      &:active {
  background-color: #0080C1;
}
link {
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #FFFFFF;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}   
@media screen and (max-width: 768px){
    height: 46px;
    margin-top: 40px;
    margin-bottom: 10px;
    border: none;
    link {
    font-size: 16px;
    line-height: 24px;
  }
  }

`

export const ModalButtonSignap = styled.button`
   width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #D0CECE;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
 &:hover {
    background-color: #F4F5F6;
      }
      &:active {
        background-color: #D9D9D9;
}
link {
    width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}   
@media screen and (max-width: 768px){
    height: 46px;
    border: 1px solid #D9D9D9;
    font-size: 16px;
    line-height: 24px;
    link {
        font-size: 16px;
    line-height: 24px;
  }
  }

`






