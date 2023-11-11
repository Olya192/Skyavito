import { styled } from 'styled-components'


export const ArticleLeft = styled.div`
     max-width: 480px;
  margin-right: 54px;
  @media screen and (max-width: 890px) {
     margin-right: 20px;
}
@media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
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
    margin-bottom: 20px;
  }
`
export const ArticleFill = styled.div`
width: 100%;
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
&:hover::before {
  border-top: 2px solid #0080C1;
  border-left: 2px solid #0080C1;
}
@media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
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
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    position: relative;
    &::before {
    content: "";
    display: block;
    width: 23px;
    height: 23px;
    background-color: transparent;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    position: absolute;
    top: 24px;
    left: 32px;
    cursor: pointer;
  }
  }
`

export const ArticleImg = styled.div`
    width: 480px;
  height: 480px;
  background-color: #F0F0F0;
  margin: 0 5px;
  img {
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
}
@media screen and (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
  }
`

export const ArticleImgBar = styled.div`
margin-top: 30px;
  width: 490px;
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
  -webkit-box-pack: left;
      -ms-flex-pack: left;
          justify-content: left;
  overflow: hidden;
  margin-left: -5px;

@media screen and (max-width: 768px) {
    display: none;
  }
`

export const ArticleImgBarDiv = styled.div`
width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #F0F0F0;
  border: 2px solid #F0F0F0;
  margin: 0 5px;
  img {
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
}
`
export const ArticleImgBarMob = styled.div`
  display: none;

@media screen and (max-width: 768px) {
    display: block;
    width: 68px;
    height: 8px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - (68px/2));
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
`

export const ArticleBarMob = styled.div`
:active {
  background-color: #FFFFFF;
}

@media screen and (max-width: 768px) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #FFFFFF;
  }
`




