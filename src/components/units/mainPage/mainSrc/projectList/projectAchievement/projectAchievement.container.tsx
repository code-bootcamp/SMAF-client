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
  const [allSchedule, setAllSchedule] = useState<number | undefined>(
    schedulesData?.fetchProjectSchedules.length
  );
  const [falesSchedulel, setFalesSchedulel] = useState<number | undefined>();
  const [result, setResult] = useState<number | undefined>();

  const Persent = async () => {
    setAllSchedule(schedulesData?.fetchProjectSchedules.length);
    await new Promise((resolve, reject) => {
      const persentValues: any = [];
      schedulesData?.fetchProjectSchedules.forEach((el: any) => {
        if (el.status === false) {
          persentValues.push(el);
        }
      });
      setFalesSchedulel(Number(persentValues.length));

      if (allSchedule === 0) {
        resolve(setResult(0));
        //   setResult(0);
      } else if (falesSchedulel === 0 && allSchedule !== 0) {
        resolve(setResult(100));
        //   setResult(100);
      } else if (falesSchedulel !== undefined && allSchedule !== undefined) {
        resolve(setResult((falesSchedulel / allSchedule) * 100));
        //   setResult((falesSchedulel / allSchedule) * 100);
      }
    });

    // await new Promise((resolve, reject) => {
    //   if (allSchedule === 0) {
    //     resolve(setResult(0));
    //   } else if (falesSchedulel === 0 && allSchedule !== 0) {
    //     resolve(setResult(100));
    //   } else if (falesSchedulel !== undefined && allSchedule !== undefined) {
    //     resolve(setResult((falesSchedulel / allSchedule) * 100));
    //   }
    // });
  };

  useEffect(() => {
    // setAllSchedule(schedulesData?.fetchProjectSchedules.length);
    Persent();
  }, [schedulesData]);

  console.log(schedulesData, "sData");
  console.log(allSchedule, "allSchedule");
  console.log(falesSchedulel, "falesSchedule");
  console.log(Number(result), "resultPer");

  return (
    <ProjectAchievementHTML
      el={props.el}
      result={result}
      schedulesData={schedulesData}
    />
  );
}
