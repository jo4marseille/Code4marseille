import Calendar from 'react-calendar'
import React, { useState } from "react";
import '../App'
import Event from '../context/JOEvent.json'
const Pcalendar =()=>{
    const [date, setDate]= useState(new Date());
    const [state, setState] = useState(true);
    var result;
    const locale = 'fr-CA';
    const onChange  = date => {
      setDate(date.toLocaleDateString());
      console.log(date);
      ask();
      setState(false);
    };
    function ask(date){
      console.log(Event[0].date)
      if (date == Event.date){
        result = <p>OUI</p>;
      }
      else{        
        result = <p>OUI</p>;
    }
    }
    return(
    <div>
      {state ?
        <Calendar showWeekNumbers onChange={onChange} value={date} />
      : 
        <div><p>oui</p></div>
      }
    </div>
    )
    }
export default Pcalendar