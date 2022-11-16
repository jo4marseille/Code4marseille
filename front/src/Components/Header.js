
import '../App'
import './style/Header.css'
import Pcalendar from './Pcalendar'
import './Map'
import logo from './img/JOrouteblanche.png'
import sport30 from './img/sport30.png'
import sport3 from './img/sport3.png'
import sport4 from './img/sport4.png'
import sport26 from './img/sport26.png'
import sport27 from './img/sport27.png'
import sport32 from './img/sport32.png'
import sport36 from './img/sport36.png'
import sport42 from './img/sport42.png'
import sport44 from './img/sport44.png'
import sport46 from './img/sport46.png'
import sport47 from './img/sport47.png'
import sport48 from './img/sport48.png'
import sport49 from './img/sport49.png'
import sport50 from './img/sport50.png'
import React, { useState } from "react";

function Header() {
    const [Modalspe, setModalspe] = useState(false);
    const [Modaldate, setModaldate] = useState(false);
    const [Modalsearch, setModalsearch] = useState(false);
    const [ArrayItem, setArrayItem] = useState([]);
    function addEvent(int){
      ArrayItem.push(int);
      console.log(ArrayItem);
      Map.addSource()
    }
  return (<>
    <div className='container'>
      <div className='force'>
      <div className='padder'>
      <div className='Searcher'>
        <div className={`Evenement ${Modalspe ? 'sizeOn' : 'sizeOff'}`}id='spe' onClick={() => setModalspe(!Modalspe)}><h6>Event</h6></div>
        <div className={`Evenement ${Modaldate ? 'sizeOn' : 'sizeOff'}`} id='Date'onClick={() => setModaldate(!Modaldate)}><h6>Date</h6></div>
        <div className={`Evenement ${Modalsearch ? 'sizeOn' : 'sizeOff'}`} id='Search'onClick={() => setModalsearch(!Modalsearch)}><h5>Search</h5></div>
      </div>
      </div>
      </div>
      <div className='Lpadder'>
      <img className='Logo' src={logo}/>
      </div>
    </div>
    {Modalspe ? (
      <div className={`eventspe ${Modalspe ? 'drop' : 'up'}`}>
        <div className='ctnr' value="1" onClick={() => {addEvent(1)}}>
        <img src={sport3}  alt='sl'className="logow"></img>
        <div className='sport'>Canoë Sprint</div>
        </div>
        <div className='ctnr' value="2" onClick={() => {addEvent(2)}}>
        <img src={sport4}  alt='sl'className="logow"></img>
        <div className='sport'>Plongeon</div>
        </div>
        <div className='ctnr' value="3" onClick={() => {addEvent(3)}}>
        <img src={sport27} alt='sl' className="logow"></img>
        <div className='sport'>Natation artistique</div>
        </div>
        <div className='ctnr' value="4" onClick={() => {addEvent(4)}}>
        <img src={sport30} alt='sl' className="logow"></img>
        <div className='sport'>Canoë slalom</div>
        </div>
        <div className='ctnr' value="5" onClick={() => {addEvent(5)}}>
        <img src={sport32} alt='sl' className="logow"></img>
        <div className='sport'>Volley de plage</div>
        </div>
        <div className='ctnr' value="6" onClick={() => {addEvent(6)}}>
        <img src={sport36} alt='sl' className="logow"></img>
        <div className='sport'>Football</div>
        </div>
        <div className='ctnr' value="7" onClick={() => {addEvent(7)}}>
        <img src={sport42} alt='sl' className="logow"></img>
        <div className='sport'>Voile</div>
        </div>
        <div className='ctnr' value="8" onClick={() => {addEvent(8)}}>
        <img src={sport44} alt='sl' className="logow"></img>
        <div className='sport'>Aviron</div>
        </div>
        <div className='ctnr' value="9" onClick={() => {addEvent(9)}}>
        <img src={sport46} alt='sl' className="logow"></img>
        <div className='sport'>Natation</div>
        </div>
        <div className='ctnr' value="10" onClick={() => {addEvent(10)}}>
        <img src={sport47} alt='sl' className="logow"></img>
        <div className='sport'>Surf</div>
        </div>
        <div className='ctnr' value="11" onClick={() => {addEvent(11)}}>
        <img src={sport48} alt='sl' className="logow"></img>
        <div className='sport'>Water-polo</div>
        </div>
        <div className='ctnr' value="12" onClick={() => {addEvent(12)}}>
        <img src={sport26} alt='sl' className="logow"></img>
        <div className='sport'>Trampoline</div>
        </div>
        <div className='ctnr' value="13" onClick={() => {addEvent(13)}}>
        <img src={sport49} alt='sl' className="logow"></img>
        <div className='sport'>Volleyball</div>
        </div>
        <div className='ctnr' value="14" onClick={() => {addEvent(14)}}>
        <img src={sport50} alt='sl' className="logow"></img>
        <div className='sport'>Triathlon</div>
        </div>
       </div>
   ) : null}
   {Modaldate ? (
     <div className={`eventdat ${Modaldate ? 'drop' : 'up'}`}>
       date
       <Pcalendar/>
     </div>
   ) : null}
   {Modalsearch ? (
      <div className={`wht ${Modalsearch ? 'hasOn' : 'hasOff'}`} id='searcher'>
     <div className='bordure'>
     <input className="search"/>
     </div>
      </div>
   ) : null}
</>
  )
}
export default Header;