import React from 'react';
import * as ReactDOM from "react-dom";
import '../style/time.css';


function Time() {
    function date() {
        const element = (
            <span>{new Date().toLocaleDateString()}</span>
          
            );
                ReactDOM.render(element, document.getElementById('date'));
            }
            
            function time() {
                const element = (
                    <span>{new Date().toLocaleTimeString()}</span>
                );
                ReactDOM.render(element, document.getElementById('time'));
            }
            
            setInterval(date, 1000);
            setInterval(time, 1000);
            
    return(
        <div class="time__container">
                <div class="date_time">Date: <p id="date"></p></div>
                <div class="date_time">Time: <p id="time"></p></div>
        </div>
    )
}

export default Time;