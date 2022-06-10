import * as S from "./experiencePlanCard.styles";
import { ExperiencePlanCardHTMLProps } from "./experiencePlanCard.types";

export default function ExperiencePlanCardHTML(
  props: ExperiencePlanCardHTMLProps
) {
  return (
    <>
      {/* <S.Wrapper>{props.el}</S.Wrapper> */}
      <S.Wrapper>
        {/* <div>{props.userData?.fetchUser.userName}</div> */}
        <S.SpaceBetweenRow>
          <S.TeamPerson src={"/image/noprofile.jpg"}></S.TeamPerson>
        </S.SpaceBetweenRow>
        <S.Title>{props.el}</S.Title>
        <S.Contents>내용이 들어가요!</S.Contents>
        <S.Date>2022-06-27</S.Date>
      </S.Wrapper>
    </>
  );
}
