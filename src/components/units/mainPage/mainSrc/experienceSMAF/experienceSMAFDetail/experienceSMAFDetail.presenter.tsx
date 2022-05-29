import * as S from "./experienceSMAFDetail.styles";
import ExperiencePlanCard from "./experiencePlanCard/experiencePlanCard.container";
import { Draggable } from "react-beautiful-dnd";
// import { v4 as uuidv4 } from "uuid";

export default function ExperienceSMAFDetailHTML(props: any) {
  console.log(props.planCardName, "1");
  console.log(props.scheduleArray, "2");
  console.log(props.categoryIndex + 1);
  return (
    <>
      <S.BasicColumn>
        <S.Wrapper>
          {/* <S.CategoryName>{props.categoryName}</S.CategoryName>
          <S.AddPlanCard onClick={props.AddPalnCard}>추가</S.AddPlanCard> */}
          <S.AddcolumnBtn>
            {props.categoryName}
            <S.AddCoulumnIcon
              onClick={props.AddPalnCard}
              src="/detailPage/AddColumn.png"
            ></S.AddCoulumnIcon>
          </S.AddcolumnBtn>
        </S.Wrapper>
        <div>
          {props.scheduleArray?.[props.categoryIndex]?.map(
            (el: any, index: any) => (
              <Draggable key={el} index={index} draggableId={el}>
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
            )
          )}
        </div>
      </S.BasicColumn>
    </>
  );
}
