import React from 'react';
import './Header.css';

function Header() {
    return (
        <div class="back">
            <br />
            <div class="heading">
                <i className="fa fa-graduation-cap" style={{ color: 'black', fontSize: '60px' }}></i>
                Master New Skills with <span class="highlight">SKILLHUB</span>
            </div>
            <br />
        </div>
    )
}
export default Header;