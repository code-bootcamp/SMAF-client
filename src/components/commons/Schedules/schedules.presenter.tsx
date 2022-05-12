import * as S from './schedules.styles'

export default function SchedulesUI(){

    return(
        <S.Container>
            <S.DateBox>
                <S.DateInfo>
                    <S.Date>2022년 5월 10일</S.Date>
                    <S.Direction>
                        <S.DirectionBtn>  ＜ </S.DirectionBtn>
                        <S.DirectionBtn> ＞ </S.DirectionBtn>
                    </S.Direction>
                </S.DateInfo>
                <S.AddBtn>+ 일정추가하기</S.AddBtn>
            </S.DateBox>
            <S.Wrapper>
            
            </S.Wrapper>
        </S.Container>
    )
}