import ProjectAchievementHTML from "./projectAchievement.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_PROJECT_SCHEDULES_PROJECTID } from "./projectAchievement.querys";
import { useState, useEffect } from "react";

export default function ProjectAchievement(props: any) {
  const { data: schedulesData } = useQuery(FETCH_PROJECT_SCHEDULES_PROJECTID, {
    variables: {
      projectId: props.el?.project.projectId,
    },
  });

  const [result, setResult] = useState(0);

  const Persent = async () => {
    const allSchedule = schedulesData?.fetchProjectSchedules.length;
    if (allSchedule === 0) {
      setResult(0);
    }
    const persentValues: any = [];
    schedulesData?.fetchProjectSchedules.forEach((el: any) => {
      if (el.status === false) {
        persentValues.push(el);
      }
    });
    const falesSchedulel = Number(persentValues.length);

    const result = Math.ceil((falesSchedulel / allSchedule) * 100);

    setResult(result);
  };

  useEffect(() => {
    Persent();
  }, [schedulesData]);

  // console.log(schedulesData, "sData");

  // console.log(Number(result), "resultPer");

  return (
    <ProjectAchievementHTML
      el={props.el}
      result={result}
      schedulesData={schedulesData}
    />
  );
}
