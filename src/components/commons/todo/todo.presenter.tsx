import * as S from './todo.styles'
import ImageCircle from '../images/01/image01.container'
import InfiniteScroll from 'react-infinite-scroller';

export default function TodoUI(props){

    return(
    <>  
            {props.data?.fetchParticipatingProject.map((el:any) => (
                <S.Wrapper key={el?.projectParticipantId}>
                    <S.Color style={{backgroundColor: el.project.projectColor}}></S.Color>
                    <S.Box style={{backgroundColor: `${el.project.projectColor}40`}}>
                        <S.TitleBox>
                        <S.Title>{el.project.projectName}</S.Title>
                        <S.Star src="/image/star.png" />
                        </S.TitleBox>
                        <S.Detail>{el.project.projectIntro}</S.Detail>
                        <ImageCircle />
                    </S.Box>
                </S.Wrapper>
            ))}
    </>
    )
}