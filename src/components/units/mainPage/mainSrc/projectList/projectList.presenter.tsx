import * as S from "./projectList.styles";
import ProjectAchievement from "./projectAchievement/projectAchievement.container";
import { v4 as uuidv4 } from "uuid";
import { ProjectListUIProps } from "./projectList.types";
import { ProjectParticipant } from "../../../../../commons/types/generated/types";

export default function ProjectListUI(props: ProjectListUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.TitleBox>
          <S.Title>Project</S.Title>
          <S.Add onClick={props.onclickToProjectNew}>+</S.Add>
        </S.TitleBox>
        {props.data?.fetchParticipatingProject.map((el: ProjectParticipant) => (
          <ProjectAchievement key={uuidv4()} el={el} />
        ))}
      </S.Wrapper>
    </>
  );
}
