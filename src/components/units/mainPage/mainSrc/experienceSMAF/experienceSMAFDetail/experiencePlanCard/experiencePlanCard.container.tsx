import ExperiencePlanCardHTML from "./experiencePlanCard.presenter";
import { ExperiencePlanCardProps } from "./experiencePlanCard.types";

export default function ExperiencePlanCard(props: ExperiencePlanCardProps) {
  return (
    <ExperiencePlanCardHTML
      number={props.number}
      categoryNum={props.categoryNum}
      el={props.el}
    />
  );
}
