import React from 'react';
import Header from '../component/Header';
import '../style/user.css';


function Cashier() {
    return(
        <div className="user-container">
             <div className="logout__div">
                    <a href="#" className="logout-btn">Logout</a>
                </div>
            <form className="user-center"> 
                <div className="cashier__title-div">
                <h1 className="user__title">CASHIER</h1>
                </div>
                <h1 className="current-queue">CURRENT QUEUE</h1>
                <h1 className="queue">3</h1>
                <button className="add-btn">ADD QUEUE</button>
                <a href="#" className="reset-btn">Reset Queue</a>
            </form>
        </div>
    )
}

export default Cashier;