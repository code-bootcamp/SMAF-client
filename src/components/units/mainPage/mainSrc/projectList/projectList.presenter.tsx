import * as S from "./projectList.styles";

export default function ProjectListUI(props) {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>Project</S.Title>
        <S.Add>+</S.Add>
      </S.TitleBox>
    {props.data?.fetchParticipatingProject.map((el)=>(
      <S.ListBox key={el.projectParticipantId}>
        <S.ProjectBox>
        <S.Check1 style={{backgroundColor:el.project.projectColor}}></S.Check1>
        <S.ProjectName>{el.project.projectName}</S.ProjectName>
        </S.ProjectBox>
        <S.RateBox>
            <S.Rate>{props.rate}%</S.Rate>
            <S.RateBackground></S.RateBackground>
            <S.RateBar rate={props.rate} style={{backgroundColor:el.project.projectColor}}></S.RateBar>
        </S.RateBox>
      </S.ListBox>   
      ))}   
    </S.Wrapper>
  );
}
