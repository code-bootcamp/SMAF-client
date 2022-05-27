import * as S from "./todoDetail.styles";
import ImageCircle from "../../images/imagecircle/01/imagecircle.container";
export default function TodoDetailHTML(props: any) {
  return (
    <>
      {[...props.dateArray].includes(String(props.today)) ? (
        <S.Wrapper>
          <S.Color
            style={{ backgroundColor: props.el.project.projectColor }}
          ></S.Color>
          <S.Box
            style={{ backgroundColor: `${props.el.project.projectColor}40` }}
          >
            <S.TitleBox>
              <S.Title>{props.el.scheduleName}</S.Title>
              <S.Star src="/image/star.png" />
            </S.TitleBox>
            <S.Detail>{props.el.scheduleContents}</S.Detail>
            <ImageCircle />
            {/* <div>생성일 : {props.el.createAt.slice(0, 10)}</div>
          <div>마감일 : {props.el.scheduleDate.slice(0, 10)}</div>
          <div>today : {props.today}</div> */}
          </S.Box>
        </S.Wrapper>
      ) : (
        <></>
      )}
    </>
  );
}
