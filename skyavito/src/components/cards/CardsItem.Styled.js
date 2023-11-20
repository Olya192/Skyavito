import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const CardsItem = styled.div`
    margin: 0;
    -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    @media screen and (max-width: 590px) {
    display: flex;
    flex-direction: column;
    align-items: center; 
}  
`
export const CardsCard = styled.div`
width: 137px;
    height: 293px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: 100%;
`
export const CardsImage = styled.div`
    width: 270px;
  height: 270px;
  background-color: #F0F0F0;
  @media screen and (max-width: 590px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #D9D9D9;
    align-self: center;}
`
export const Image = styled.img`
  width: 270px;
  height: 270px;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
     @media screen and (max-width: 590px) {
        width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;}
`
export const CardTitleLink = styled(Link)`
    overflow: hidden;
`

export const CardTitle = styled.h3`
   height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009EE4;
    margin-bottom: 10px;
    margin-top: 10px;
    overflow: hidden;
`

export const CardPrise = styled.p`
   font-size: 16px;
    line-height: 24px;
`
export const CardPlase = styled.p`
   font-size: 12px;
    line-height: 16px;
    color: #5F5F5F;
`
export const CardDate = styled.p`
    font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
`

export const CardText = styled.div`
    padding-left: 10px;
`