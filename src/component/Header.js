import React from 'react';
import '../style/header.css';


function Header() {
    return(
        <article className="srh-header">
            <marquee className="header__ani" behavior="scroll" direction="right"><h1>STO. ROSARIO HOSPITAL </h1></marquee>
        </article>
    )
}

export default Header;