import Dropdown01 from '../dropdown/01/dropdown01'
import * as S from './teamMember.styles'

export default function TeamMemberUI(){

    return(
        <S.Wrapper>
            <S.TitleBox>
                <S.Title>Members</S.Title>
                <Dropdown01 />
            </S.TitleBox>
            <S.TeamPeople>
                <S.Team>
                    <S.Member>
                        <S.TeamPerson src="/mainPageImages/dog1.jpg" />
                        <S.Name>범수</S.Name>
                    </S.Member>
                </S.Team>
                    <S.Line></S.Line>
                <S.Team>
                    <S.Member>
                        <S.TeamPerson src="/mainPageImages/dog2.jpg" />
                        <S.Name>서현</S.Name>
                    </S.Member>
                    <S.RemoveBtn>삭제</S.RemoveBtn>
                </S.Team>
                <S.Team>
                    <S.Member>
                        <S.TeamPerson src="/mainPageImages/dog3.jpg" />
                        <S.Name>윤정</S.Name>
                    </S.Member>
                        <S.RemoveBtn>삭제</S.RemoveBtn>
                </S.Team>
                <S.Team>
                    <S.Member>
                        <S.TeamPersonAdd>+</S.TeamPersonAdd>
                        <S.Name>팀원초대하기</S.Name>
                    </S.Member>
                </S.Team>
            </S.TeamPeople>
        </S.Wrapper>
    )
}