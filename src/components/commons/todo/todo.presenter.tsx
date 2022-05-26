import TodoDetail from "./todoDetail/todoDetail.container";

export default function TodoUI(props: any) {
  return (
    <>
      {props.data?.fetchProjectSchedules.map((el: any) => (
        <TodoDetail key={el.scheduleId} el={el} today={props.today} />
      ))}
    </>
  );
}
