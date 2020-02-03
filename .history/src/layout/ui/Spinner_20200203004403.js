import React from 'react';
import "./spinner.css";
const Spinner = () => {
    return (
        <div className="mx-auto" style="width: 200px;">
        <div className="sk-chase" >
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
        </div>
    );
};

export default Spinner;