import React from 'react';
import a2hs from '../img/a2hs.svg';

export default function A2HS(props) {
    const { type, handleButtonClick } = props;
    let color;

    switch (type) {
        case "NEW":
            color = "#f4b869";
            break;
        case "RECOV":
            color = "#96e542";
            break;
        case "DEATH":
            color = "#f56a6a";
            break;
        default:
            break;
    }


    return (
        <div className="a2hs" style={{backgroundColor: color}} onClick={handleButtonClick}>
            <img src={a2hs} alt="install" />
        </div>
    );
}