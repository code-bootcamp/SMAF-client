import * as S from "./experiencePlanCard.styles";

export default function ExperiencePlanCardHTML(props: any) {
  return (
    <>
      {/* <S.Wrapper>{props.el}</S.Wrapper> */}
      <S.Wrapper>
        {/* <div>{props.userData?.fetchUser.userName}</div> */}
        <S.SpaceBetweenRow>
          <S.TeamPerson src={"/test.png"}></S.TeamPerson>
        </S.SpaceBetweenRow>
        <S.Title>{props.el}</S.Title>
        <S.Contents>내용이 들어가요!</S.Contents>
        <S.Date>2022-06-27</S.Date>
      </S.Wrapper>
    </>
  );
}
