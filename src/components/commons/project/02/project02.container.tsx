import * as S from "./project02.styles";
import ImageCircle from "../../images/imagecircle/01/imagecircle.container";
import { ProjectParticipant } from "../../../../commons/types/generated/types";

interface IUserProject {
  el?: ProjectParticipant;
}

export default function Project02(props: IUserProject) {
  return (
    <S.card>
      <S.Container>
        <S.box1>
          {props.el?.project.projectImageURL ? (
            <S.ImgBox src={props.el?.project.projectImageURL}></S.ImgBox>
          ) : (
            <S.ImgBox src="/images/noimage.png"></S.ImgBox>
          )}
          <S.TextBox>
            <S.MainTitle>{props.el?.project.projectName}</S.MainTitle>
            <S.SubTitle>{props.el?.project.projectIntro}</S.SubTitle>
          </S.TextBox>
        </S.box1>
        <S.box2>
          <ImageCircle />
          <S.Title01>{props.el?.project.projectName}</S.Title01>
          <S.Title02>{props.el?.project.projectIntro}</S.Title02>
          <S.Date>프로젝트가 마감되었습니다.</S.Date>
        </S.box2>
      </S.Container>
    </S.card>
  );
}
