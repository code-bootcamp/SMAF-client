import * as S from "./experiencePlanCard.styles";

export default function ExperiencePlanCardHTML(props: any) {
  return (
    <>
      <S.Wrapper>
        {props.categoryNum}카테고리 {props.number}번 글
      </S.Wrapper>
    </>
  );
}
