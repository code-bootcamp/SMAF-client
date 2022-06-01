import * as S from "./experienceSMAFDetail.styles";
import ExperiencePlanCard from "./experiencePlanCard/experiencePlanCard.container";
import { Draggable } from "react-beautiful-dnd";
// import { v4 as uuidv4 } from "uuid";

export default function ExperienceSMAFDetailHTML(props: any) {
  return (
    <>
      <S.BasicColumn>
        <S.Wrapper>
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
