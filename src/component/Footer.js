import React from 'react';
import Time from './Time';
import '../style/footer.css';


function Footer() {
    return(
        <footer className="footer-container">
            <div className="contact">
                <p >STO ROSARIO HOSPITAL CONTACT #:</p>
                <div><p><i class="fas fa-mobile-alt"></i> 0932-843-6537 | <i class="fas fa-phone"></i> 781-3331</p></div>
            </div>

           <div className="time_date">
                <Time />
            </div>            
        </footer>
    )
}

export default Footer;