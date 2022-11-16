import { useContext, useState, useEffect } from "react";
import { JOContext } from '../context/JOContext';
import './style/Search.css';
import JOJson from '../JSON/JO.json';

function Search()
{
    const {JO} = useContext(JOContext);
    const [Modalspe, setModalspe] = useState(false);
    const [eventDisplay, setEventDisplay] = useState([])
    const [day, setDay] = useState(1);
    var nbDay;
    var firstEventDay = 0;
    var lastEventDay = 0;
    let days = [];
    let event = [];

    JO.forEach((item) => {

        if(firstEventDay == 0 || firstEventDay > JOJson[item].date.split('/')[1])
        {
            firstEventDay = JOJson[item].date.split('/')[1];
        }

        if(lastEventDay == 0 || lastEventDay < JOJson[item].date.split('/')[1])
        {
            lastEventDay = JOJson[item].date.split('/')[1];
        }
    }, []); 

    console.log(firstEventDay);
    console.log(lastEventDay);
    nbDay = lastEventDay - firstEventDay; //set le nombre de jour nécessaire a l'utilisateur pour participer au events selectionner

    for(var i = 1; i <= nbDay; i++)
    {
        days.push(<div className="option" onClick={() => {displayTimeline(i)}}><p>Jour {i}</p></div>);
    }

    function displayTimeline(day)
    {
        event = [];
        setModalspe(false)
        console.log(day);
        JOJson.forEach((item) => {
            if(parseInt(item.date.split('/')[1]) == parseInt(day-1))
            {
                let timeJO = parseInt(item.heureDeFin) - parseInt(item.heureDeDebut);
                let timeAfter8Hour = parseInt(item.heureDeDebut) - 8;
        
                let position = 6.2 * timeAfter8Hour;
                let width = 6.1 * timeJO;

                event.push(<div className="activity" style={{width:`${width}%`, marginLeft:`${position}%`}}></div>);
            }
        });
        console.log(event);
        setEventDisplay(event);
    }

    return (
        <>
            <div id="corp">
                 <div>
                    <div id="selectDay" onClick={() => setModalspe(!Modalspe)}>
                        Jour 1{/* Jour selectionner */}
                    </div>
                </div>
                    {Modalspe ? (
     <div className="cube">
        <div className="days">
      {days}
     </div>
     </div>
   ) : null}
                <div id="timeline">
                    {eventDisplay}
                    <div id="hour">
                        <p>|8h</p>
                        <p className="hour">|12h</p>
                        <p className="hour">|16h</p>
                        <p className="hour">|20h</p>
                        <p className="hour">00h|</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;