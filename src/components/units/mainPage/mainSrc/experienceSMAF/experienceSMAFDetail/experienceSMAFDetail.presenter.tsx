import * as S from "./experienceSMAFDetail.styles";
import ExperiencePlanCard from "./experiencePlanCard/experiencePlanCard.container";
import { Draggable } from "react-beautiful-dnd";
// import { v4 as uuidv4 } from "uuid";

export default function ExperienceSMAFDetailHTML(props: any) {
  //   console.log(props.planCardName);
  return (
    <>
      <S.BasicColumn>
        <S.Wrapper>
          <S.CategoryName>{props.categoryName}</S.CategoryName>
          <S.AddPlanCard onClick={props.AddPalnCard}>추가</S.AddPlanCard>
        </S.Wrapper>
        <div>
          {props.planCardName?.map((el: any, index: any) => (
            <Draggable key={el[0]} index={index} draggableId={el[0]}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                >
                  <ExperiencePlanCard
                    key={index}
                    el={el}
                    index={index}
                    number={index + 1}
                    categoryNum={props.categoryIndex + 1}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </div>
      </S.BasicColumn>
    </>
  );
}
