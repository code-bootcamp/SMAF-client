import styled from "@emotion/styled";
import Calendar from 'react-calendar';

export const MiniCalendar = styled(Calendar)`
width: 100%;
border: none;
border-radius: 1.6rem;

.react-calendar { 
 width: 31rem;
 max-width: 100%;
 background-color: #fff;
 color: #222;
 border-radius: 3rem;
 box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
 font-family: Arial, Helvetica, sans-serif;
 line-height: 1.125em;
}
.react-calendar__navigation button {
 color: #333333;
 min-width: 4.4rem;
 background: none;
 font-size: 1.6rem;
 margin-top: 0.8rem;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background-color: #f8f8fa;
 color: #333333;
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
 text-decoration: none;
}
.react-calendar__month-view__days__day--weekend {
 color: #d10000;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
 background: #f8f8fa;
 color: #333333;
 border-radius: 0.6rem;
}
.react-calendar__tile--now {
 background: #333333;
 border-radius: 0.6rem;
 font-weight: bold;
 color: white;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
 background: #DBDBDB;
 border-radius: 0.6rem;
 font-weight: bold;
 color: #333333;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
 background: #f8f8fa;
}
.react-calendar__tile--active {
 background: #EBEBEB;
 border-radius: 0.6rem;
 font-weight: bold;
 color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
 background: #DBDBDB;
 color: white;
}
`
