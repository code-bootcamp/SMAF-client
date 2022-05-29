import * as S from "./todoDetail.styles";
import ImageCircle from "../../images/imagecircle/01/imagecircle.container";
import { useMoveToPage } from "../../hooks/useMoveToPage";

export default function TodoDetailHTML(props: any) {
  const { MoveToPage } = useMoveToPage();

  return (
    <>
      {[...props.dateArray].includes(String(props.today)) &&
      props.el?.status === true ? (
        <S.Wrapper
          onClick={MoveToPage(`/project/${props.el?.project.projectId}`)}
        >
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
            <ImageCircle id={props.el?.project.projectId} />
          </S.Box>
        </S.Wrapper>
      ) : (
        <></>
      )}
    </>
  );
}
