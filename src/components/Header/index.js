import './index.css';
import React from 'react';

const Header = ({titleColor}) => {
    var className = titleColor == "black" ? "siteTitleSignedIn" : "siteTitle";
    var wrapClassName = titleColor == "black" ? "siteHeaderSignedIn" : "siteHeader";
    return (
        <div className={className}>
            <p className={wrapClassName}>E.</p>
        </div>
    )
}
    

export default Header;