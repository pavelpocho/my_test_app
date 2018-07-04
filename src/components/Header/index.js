import './index.css';
import React from 'react';
import UserWidget from '../UserWidget';

const Header = ({titleColor, showUserWidget}) => {
    var className = titleColor == "black" ? "siteTitleSignedIn" : "siteTitle";
    var wrapClassName = titleColor == "black" ? "siteHeaderSignedIn" : "siteHeader";
    const userWidget = window.userEmail != undefined ? <UserWidget /> : null;
    return (
        <div className={wrapClassName}>
            <p className={className}>E.</p>
            {userWidget}
        </div>
    )
}
export default Header;