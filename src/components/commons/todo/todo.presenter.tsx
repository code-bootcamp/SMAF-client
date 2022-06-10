import TodoDetail from "./todoDetail/todoDetail.container";
import styled from "@emotion/styled";
import { TodoUIProps } from "./todo.types";
import { Schedule } from "../../../commons/types/generated/types";

const Nodata = styled.div`
  position: absolute;
  top: 30rem;
  font-size: 1.8rem;
`;
const NoSchedule = styled.img`
  width: 35rem;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  position: relative;
`;

export default function TodoUI(props: TodoUIProps) {
  return (
    <>
      {props.data?.fetchProjectSchedules.length ? (
        <>
          {props.data?.fetchProjectSchedules.map((el: Schedule) => (
            <TodoDetail key={el.scheduleId} el={el} today={props.today} />
          ))}
        </>
      ) : (
        <Data>
          <NoSchedule src="/images/noschedule.png" />
          <Nodata>등록된 일정이 없습니다.</Nodata>
        </Data>
      )}
    </>
  );
}
