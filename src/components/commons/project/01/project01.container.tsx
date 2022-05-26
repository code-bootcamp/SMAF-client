// import { OrderedListOutlined } from "@ant-design/icons";
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
          {props.el?.project.projectImageURL ? (
            <S.ImgBox src={props.el?.project.projectImageURL}></S.ImgBox>
          ) : (
            <S.ImgBox src="/noimage.png"></S.ImgBox>
          )}

          {/* <S.ImgBox src="/test.png"></S.ImgBox> */}
          <S.TextBox>
            <S.MainTitle>{props.el?.project.projectName}</S.MainTitle>
            <S.SubTitle>{props.el?.project.projectIntro}</S.SubTitle>
          </S.TextBox>
        </S.box1>

        <S.box2>

          <ImageCircle el={props.el} id={props.el?.project.projectId} />

          <S.Title01>{props.el?.project.projectName}</S.Title01>
          <S.Title02>{props.el?.project.projectIntro}</S.Title02>
          <S.Date>{getDate(props.el?.project.startDate)}</S.Date>
        </S.box2>
      </S.Container>
    </S.card>
  );
}
