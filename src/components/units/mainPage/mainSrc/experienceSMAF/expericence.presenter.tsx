import * as S from "./expericence.styles";
import ExperienceSMAFDetail from "./experienceSMAFDetail/experienceSMAFDetail.container";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import { v4 as uuidv4 } from "uuid";

export default function ExperienceSMAFHTML(props: any) {
  return (
    <S.Wrapper>
      <DragDropContext
        onDragEnd={props.handleDragEnd}
        onDragStart={props.handleDragStart}
      >
        {props.categoryName?.map((el: any, index: any) => (
          <Droppable droppableId={el[0]} key={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                // style={{backgroundColor: snapshot.isDraggingOver ? 'white' : 'grey'}}
              >
                <ExperienceSMAFDetail
                  key={index}
                  el={el}
                  index={index}
                  number={index}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
        <S.AddcolumnBtn onClick={props.AddColumn}>항목추가</S.AddcolumnBtn>
      </DragDropContext>
    </S.Wrapper>
  );
}
