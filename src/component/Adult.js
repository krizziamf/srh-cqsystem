import React from 'react';
import '../style/user.css';


function Adult() {
    return(
        <div className="adult-container">
            <div className="adult-center"> 
                <h1 className="adult-title">ADULT</h1>
                <h1>CURRENT QUEUE</h1>
                <h1>3</h1>
                <button className="add-btn">ADD QUEUE</button>
                <a href="#" className="reset-btn">Reset Queue</a>
            </div>
        </div>
    )
}

export default Adult;