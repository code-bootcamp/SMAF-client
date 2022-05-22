import { getDate } from "../../../../commons/utils";
import ImageCircle from "../../images/01/image01.container";
// import ProjectUI from "./project01.presenter";
import * as S from "./project02.styles";

interface IUserProject {
  el?: any;
}

export default function Project02(props: IUserProject) {
  return (
    <S.card>
      <S.Container>
        <S.box1>
          {/* <S.ImgBox src={props.projectImageSrc}></S.ImgBox> */}
          <S.ImgBox src="/cola.png"></S.ImgBox>
          <S.TextBox>
            <S.MainTitle>{props.el?.project.projectName}</S.MainTitle>
            <S.SubTitle>{props.el?.project.projectIntro}</S.SubTitle>
          </S.TextBox>
        </S.box1>

        <S.box2>
          <ImageCircle />
          <S.Title01>{props.el?.project.projectName}</S.Title01>
          <S.Title02>{props.el?.project.projectIntro}</S.Title02>
          <S.Title03>{getDate(props.el?.project.startDate)}</S.Title03>
        </S.box2>
      </S.Container>
    </S.card>
  );
}
