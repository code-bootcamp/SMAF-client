import * as S from "./projectAchievement.styles";
import { IProjectAchievementHTMLProps } from "./projectAchievement.types";
export default function ProjectAchievementHTML(
  props: IProjectAchievementHTMLProps
) {
  return (
    <>
      {props.schedulesData && (
        <S.ListBox>
          <S.ProjectBox>
            <S.Check1
              style={{ backgroundColor: props.el.project.projectColor }}
            ></S.Check1>
            <S.ProjectName>{props.el.project.projectName}</S.ProjectName>
          </S.ProjectBox>
          {typeof props.result === "number" ? (
            <S.RateBox>
              <S.Rate>{Number(props.result)}%</S.Rate>
              <S.RateBackground></S.RateBackground>
              <S.RateBar
                results={Number(props.result)}
                style={{ backgroundColor: props.el.project.projectColor }}
              ></S.RateBar>
            </S.RateBox>
          ) : (
            <S.RateBox>
              <S.Rate>0%</S.Rate>
              <S.RateBackground></S.RateBackground>
              <S.RateBar
                results={Number(0)}
                style={{ backgroundColor: props.el.project.projectColor }}
              ></S.RateBar>
            </S.RateBox>
          )}
        </S.ListBox>
      )}
    </>
  );
}
