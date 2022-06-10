import * as S from "./experienceSMAFDetail.styles";
import ExperiencePlanCard from "./experiencePlanCard/experiencePlanCard.container";
import { Draggable } from "react-beautiful-dnd";
import { ExperienceSMAFDetailHTMLProps } from "./experienceSMAFDetail.types";
// import { v4 as uuidv4 } from "uuid";

export default function ExperienceSMAFDetailHTML(
  props: ExperienceSMAFDetailHTMLProps
) {
  return (
    <>
      <S.BasicColumn>
        <S.Wrapper>
          <S.AddcolumnBtn>
            {props.categoryName}
            <S.AddCoulumnIcon
              onClick={props.AddPalnCard}
              src="/detailPage/addcolumn.png"
            ></S.AddCoulumnIcon>
          </S.AddcolumnBtn>
        </S.Wrapper>
        <div>
          {props.scheduleArray?.[props.categoryIndex]?.map(
            (el: string, index: number) => (
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
