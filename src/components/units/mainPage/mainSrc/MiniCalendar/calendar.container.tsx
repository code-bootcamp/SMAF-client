import React, { useState } from 'react';
// import {Ccc} from '../../../node_modules/react-calendar/dist/Calendar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function MiniCalendar(){

    const [value, onChange] = useState(new Date());
    
    
    return(
    <div style={{width:"310px"}}>
      <Calendar onChange={onChange} value={value} />
    </div>
    )
}