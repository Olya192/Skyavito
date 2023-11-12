import { styled } from 'styled-components'

export const ArticleRight = styled.div`
  max-width: 621px;
  @media screen and (max-width: 890px) {
     margin-right: 20px;
}
@media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`
export const ArticleBlock = styled.div`
   display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
`
export const ArticleTitle = styled.h3`
  margin-bottom: 10px;

@media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`
export const ArticleInfo = styled.div`
  margin-bottom: 34px;
@media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`
export const ArticleData = styled.p`
 font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 4px;

@media screen and (max-width: 768px) {
   font-size: 14px;
    line-height: 17px;
    color: #5F5F5F;
    margin-bottom: 4px;
  }
`


export const ArticleLink = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #009EE4;

@media screen and (max-width: 768px) {
  font-size: 14px;
    line-height: 19px;
    color: #009EE4;
  }
`
export const ArticlePrice = styled.p`
 font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;

@media screen and (max-width: 768px) {
  font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`
export const ArticleButton = styled.button`
   background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  span {
  display: block;
  font-size: 14px;
  font-weight: 400;
}

@media screen and (max-width: 768px) {
  width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
  span {
    font-size: 12px;
  }
  }
`
export const ArticleButtonDiv = styled.div`
display: flex;
    gap: 14px;
    `

export const ArticleAuthor = styled.div`
 margin-top: 34px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;

@media screen and (max-width: 768px) {
  margin-top: 30px;
    margin-bottom: 30px;
  }
`

export const ArticleImg = styled.div`
 width: 40px;
  height: 40px;
  background-color: #F0F0F0;
  border-radius: 50%;
  img {
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
}
`
export const AuthorCont = styled.div`
   margin-left: 12px;
`
export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009EE4;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`
export const AuthorAbout = styled.p`
    font-size: 16px;
  line-height: 32px;
  color: #5F5F5F;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 28px;
  }
`