import { useState } from 'react';
import * as  S from './onedaypicker.styles'
import moment from "moment";
import { useRecoilState } from 'recoil';
import { selectedDate } from '../../../../commons/store';

export default function OneDayPick() {
  // const today = new Date();
  const [selectedDay, setSelectedDay] = useRecoilState<Date | undefined>(selectedDate);

  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const onChangeDate = (event) => {
    setSelectedDay(event.target.value)
  }


  const day = (
    <div className="ma2">
      <S.Input
      // size={50}
      value={moment(selectedDay).format("YYYY-MM-DD")}
      onChange={onChangeDate}
      className="input-reset pa2 ma bg-white black ba"
      />
    </div>
  )

  return (
    <>
    <div onClick={onClickOpen}>{day}</div>
    {isOpen && (
      <S.ReactDayOnePick
        mode="single"
        required
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
    )}
    </>
  );
}
