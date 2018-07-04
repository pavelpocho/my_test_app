import React from 'react';
import './index.css';
import image from '../../assets/images/gangwar.png';

const SideImage = () => (
    <div className="sideImageWrap">
        <img className="sideImage" src={image} />
        <div className="quoteWrap">
            <p className="sideImageQuote">"Great, kid. Don't get cocky."</p>
            <div className="quoteSeparator"></div>
            <p className="quoteAuthor">Han Solo</p>
        </div>
    </div>
)
    

export default SideImage;