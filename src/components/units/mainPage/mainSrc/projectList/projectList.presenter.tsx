import * as S from "./projectList.styles";

export default function ProjectListUI(props) {
  console.log("프로젝트리스트", props.data?.fetchParticipatingProject[0].project.projectId)
  return (
    <>
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>Project</S.Title>
        <S.Add>+</S.Add>
      </S.TitleBox>
    {props.data?.fetchParticipatingProject.map((el, i) => (
      <S.ListBox  key={el.project.projectI}>
        <S.ProjectBox>
        <S.Check1 style={{backgroundColor:el.project.projectColor}}></S.Check1>
        <S.ProjectName>{el.project.projectName}</S.ProjectName>
        </S.ProjectBox>
        <S.RateBox>
            <S.Rate >{props.rate}%</S.Rate>
            <S.RateBackground></S.RateBackground>
            <S.RateBar rate={props.rate} style={{backgroundColor:el.project.projectColor}}></S.RateBar>
        </S.RateBox>
      </S.ListBox>      
        ))}
    </S.Wrapper>
    </>
  );
}
