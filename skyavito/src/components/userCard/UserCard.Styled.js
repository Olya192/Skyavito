import { styled } from 'styled-components'
import { NavLink } from "react-router-dom"

export const SettingsLeft = styled.div`
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
  margin-right: 43px;

  @media screen and (max-width: 620px) {
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
    margin-right: 0;
  }
`
export const SettingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #F0F0F0;
  @media screen and (max-width: 620px) {
    width: 132px;
    height: 132px;
  }
`
export const SettingsChange = styled.label`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009EE4;
  cursor: pointer;
`
export const inputChange = styled.input`
display: none;
`
export const AvatarImg = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 85px;
`


