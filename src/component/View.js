import React from 'react';
import Header from '../component/Header';
import '../style/view.css';


function View() {
    return(
        <div className="view-container">
        <Header />
            <div class="flex-container">
                <div class="flex-item">
                    <div className="flex-item-1">PEDIA</div>
                    <h1>6</h1>
                </div>
                <div class="flex-item">
                    <div className="flex-item-2">ADULT</div>
                    <h1>120</h1>
                </div>
                <div class="flex-item">
                <div className="flex-item-3">ER</div>
                    <h1>7</h1>
                </div>
                <div class="flex-item">
                    <div className="flex-item-4">CASHIER</div>
                    <h1>6</h1>
                </div>
            </div>
        </div>
    )
}

export default View;