import * as S from "./detailPlanAddModal.styled";
export default function DetailPlanAddModal() {
  return (
    <S.Wrapper>
      <S.ProjectName>
        <S.Word>프로젝트 명</S.Word>
        <S.ProjectNameInput></S.ProjectNameInput>
      </S.ProjectName>
      <S.ProjectContents>
        <S.Word>일정내용</S.Word>
        <S.ContentsArea></S.ContentsArea>
      </S.ProjectContents>
      <S.EndDate>
        <S.Word>마감일</S.Word>
        <S.Date></S.Date>
      </S.EndDate>
      <S.ConfirmBtn>일정 추가하기</S.ConfirmBtn>
    </S.Wrapper>
  );
}

// 14px
