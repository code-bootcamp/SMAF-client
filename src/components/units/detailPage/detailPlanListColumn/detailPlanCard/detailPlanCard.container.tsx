import DetailPlanCardHTML from "./detailPlanCard.presenter";

interface DetailPlanCardProps {
  el: any;
}
export default function DetailPlanCard(props: DetailPlanCardProps) {
  return <DetailPlanCardHTML el={props.el} />;
}
