import * as S from './ReviewsPost.Styles'
import img from '../../img/photo_2023-11-10_21-58-33.jpg'

export const ReviewsPost = ({comment}) => {

    return (
        <S.Reviews>
            <S.ReviewsItem>
                <S.ReviewLeft>
                    <S.ReviewImg>
                        <img src={comment?.author?.avatar > 0 ? `http://127.0.0.1:8090/${comment?.author?.avatar}` : img} alt="" />
                    </S.ReviewImg>
                </S.ReviewLeft>
                <S.ReviewRight>
                    <S.ReviewName>{comment?.author?.name}<span>{comment?.created_on}</span></S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>{comment?.text}</S.ReviewText>
                </S.ReviewRight>
            </S.ReviewsItem>
        </S.Reviews>
    )
}