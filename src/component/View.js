import React from 'react';
import Header from '../component/Header';
import '../style/view.css';


function View() {
    return(
        <div className="view-container">
        <Header />
            <div class="flex-container">
                <div class="flex-item flex-item-1">PEDIA</div>
                <div class="flex-item flex-item-2">ADULT</div>
                <div class="flex-item flex-item-3">ER</div>
                <div class="flex-item flex-item-4">CASHIER</div>
            </div>
        </div>
    )
}

export default View;