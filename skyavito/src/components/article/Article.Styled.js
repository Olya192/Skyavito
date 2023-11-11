import { styled } from 'styled-components'

export const MainArtic = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;
@media screen and (max-width: 768px) {
    max-width: 1178px;
    width: 100%;
    padding: 55px 0 0px;
    margin: 0 auto;
  }
`
export const ArticContent = styled.div`
   display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
      -ms-flex-align: top;
          align-items: top;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
@media screen and (max-width: 768px) {
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
  }
`
export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
@media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
`
export const MainTitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
@media screen and (max-width: 768px) {
    margin-bottom: 14px;
    padding: 0;
  }
`
export const MainContant = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
@media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
}
`
export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`