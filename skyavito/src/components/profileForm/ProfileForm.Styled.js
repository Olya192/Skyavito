import { styled } from 'styled-components'

export const SettingsRight = styled.div`
  width: 630px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`
export const SettingsForm = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
   flex-direction: column;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
 

input {
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
}
input::-webkit-input-placeholder {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
input:-ms-input-placeholder {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
label {
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #C4C4C4;
  margin-bottom: 4px;
  display: block;
}
  input::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 21px;
  }
  input:-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
  }
  input::-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
  }
  input::placeholder {
    font-size: 14px;
    line-height: 21px;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
     input {
    border-radius: 30px;
    padding: 9px 17px;
  }
  input::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 21px;
  }
  input:-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
  }
  input::-ms-input-placeholder {
    font-size: 14px;
    line-height: 21px;
  }
  input::placeholder {
    font-size: 14px;
    line-height: 21px;
  }
  label {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
    margin-bottom: 6px;
  }
  }
`
export const SettingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
  @media screen and (max-width: 620px) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`

export const SettingsInput = styled.input`
  width: 300px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`

export const SettingsButton = styled.button`
font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
  &:hover {
  background-color: #0080C1;
}
  @media screen and (max-width: 620px) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`
export const SettingsName = styled.div`
 display: flex;

  @media screen and (max-width: 620px) {
    padding: 85px 0px 84px;
  }
`