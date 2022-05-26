import { ChangeEventHandler, useState } from "react";
import { format, isAfter, isBefore, isValid, parse } from "date-fns";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";
// import 'react-day-picker/dist/style.css';
import {
  ReactDayPick,
  Input,
  StartEndDate,
  FromTo,
  StartDay,
  Picker,
} from "./daypicker.styles";
import { useRecoilState } from "recoil";
import { fromValues, toValues } from "../../../commons/store";

export default function DayPick(props: any) {
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [fromValue, setFromValue] = useRecoilState<string>(fromValues);
  const [toValue, setToValue] = useRecoilState<string>(toValues);
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, "y-MM-dd", new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, "y-MM-dd", new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  const handleRangeSelect: SelectRangeEventHandler = (
    range: DateRange | undefined
  ) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, "y-MM-dd"));
    } else {
      setFromValue("");
    }
    if (range?.to) {
      setToValue(format(range.to, "y-MM-dd"));
    } else {
      setToValue("");
    }
  };

  const start = (
    <div className="ma2">
      <StartDay>
        <Input
          size={29}
          value={fromValue}
          onChange={handleFromChange}
          className="input-reset pa2 ma bg-white black ba"
          defaultValue={props.data?.fetchProject.startDate.slice(0, 10)}
        />
        <FromTo></FromTo>
      </StartDay>
    </div>
  );

  const end = (
    <div className="ma2">
      <Input
        size={29}
        value={toValue}
        onChange={handleToChange}
        className="input-reset pa2 bg-white black ba"
        defaultChecked={props.data?.fetchProject.endDate.slice(0, 10)}
      />
    </div>
  );

  return (
    <div>
      <StartEndDate>
        <span onClick={onClickOpen}>{start}</span>
        <span>{end}</span>
      </StartEndDate>
      {isOpen && (
        <Picker>
          <ReactDayPick
            showOutsideDays={true}
            mode="range"
            selected={selectedRange}
            onSelect={handleRangeSelect}
          />
        </Picker>
      )}
    </div>
  );
}
