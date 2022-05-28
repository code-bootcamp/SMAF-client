import * as S from "./todoDetail.styles";
import ImageCircle from "../../images/imagecircle/01/imagecircle.container";
export default function TodoDetailHTML(props: any) {
  return (
    <>
      {[...props.dateArray].includes(String(props.today)) &&
      props.el?.status === true ? (
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
          </S.Box>
        </S.Wrapper>
      ) : (
        <></>
      )}
    </>
  );
}
