import { getDate } from "../../../../commons/utils";
import ImageCircle from "../../images/01/image01.container";
// import ProjectUI from "./project01.presenter";
import * as S from "./project01.styles";

interface IUserProject {
  el?: any;
}

export default function Project01(props: IUserProject) {
  return (
    <S.card>
      <S.Container>
        <S.box1>
          {/* <S.ImgBox src={props.projectImageSrc}></S.ImgBox> */}
          <S.ImgBox src="/test.png"></S.ImgBox>
          <S.TextBox>
            <S.MainTitle>{props.el?.projectName}</S.MainTitle>
            <S.SubTitle>{props.el?.projectIntro}</S.SubTitle>
          </S.TextBox>
        </S.box1>

        <S.box2>
          <ImageCircle />
          <S.Title01>{props.el?.projectName}</S.Title01>
          <S.Title02>{props.el?.projectIntro}</S.Title02>
          <S.Title03>{getDate(props.el?.startDate)}</S.Title03>
        </S.box2>
      </S.Container>
    </S.card>
  );
}
