import DetailPlanCard from "./detailPlanCard/detailPlanCard.container";
import * as S from "./detailPlanListColumn.styles";
export default function DetailPlanListColumnHTML() {
  return (
    <S.Wrapper>
      <S.AddColumn>
        <div>진행예정</div>
        <S.AddCoulumnIcon src="/detailPage/AddColumn.png"></S.AddCoulumnIcon>
      </S.AddColumn>
      <DetailPlanCard />
    </S.Wrapper>
  );
}
