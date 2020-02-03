import React from 'react';
import "./spinner.css";
const Spinner = () => {
    return (
        <div className="sk-chase center" >
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    );
};

export default Spinner;