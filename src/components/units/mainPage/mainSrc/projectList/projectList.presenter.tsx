import * as S from "./projectList.styles";
import ProjectAchievement from "./projectAchievement/projectAchievement.container";
import { v4 as uuidv4 } from "uuid";

export default function ProjectListUI(props: any) {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>Project</S.Title>
        <S.Add onClick={props.onclickToProjectNew}>+</S.Add>
      </S.TitleBox>
      {props.data?.fetchParticipatingProject.map((el: any) => (
        <ProjectAchievement key={uuidv4()} el={el} />
      ))}
    </S.Wrapper>
  );
}
