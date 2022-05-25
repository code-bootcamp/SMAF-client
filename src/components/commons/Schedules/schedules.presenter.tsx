import moment from 'antd/node_modules/moment'
import * as S from './schedules.styles'
import Todo from '../todo/todo.container'

export default function SchedulesUI(props){

    return(
        <S.Container>
            <S.DateBox>
                <S.DateInfo>
                    <S.Date>{moment(props.value).format("YYYY년 MM월 DD일")}</S.Date>
                    <S.Direction>
                        <S.LDirectionBtn onClick={props.onClickBefore}>  ＜ </S.LDirectionBtn>
                        <S.RDirectionBtn onClick={props.onClickAfter}> ＞ </S.RDirectionBtn>
                    </S.Direction>
                </S.DateInfo>
                <S.AddBtn onClick={props.onClickToProjectSignUp}>+ 프로젝트 생성</S.AddBtn>
            </S.DateBox>
            <S.Wrapper>
            <Todo />
            </S.Wrapper>
        </S.Container>
    )
}