import * as S from "./projectList.styles";

export default function ProjectListUI(props) {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>Project</S.Title>
        <S.Add>+</S.Add>
      </S.TitleBox>
      <S.ListBox>
        <S.ProjectBox>
        <S.Check1></S.Check1>
        <S.ProjectName>코카콜라 리디자인 프로젝트</S.ProjectName>
        </S.ProjectBox>
        <S.RateBox>
            <S.Rate >{props.rate}%</S.Rate>
            <S.RateBackground></S.RateBackground>
            <S.RateBar rate={props.rate}></S.RateBar>
        </S.RateBox>
      </S.ListBox>      
    </S.Wrapper>
  );
}
