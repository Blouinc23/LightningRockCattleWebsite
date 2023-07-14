import React from 'react';
import { Link } from "react-router-dom";

function Button({className, link, text}) {
    return (
        <>
        <Link className={`lrgbutton ${className}`} to={link? link : ''}>
          {text}
        </Link>
        </>
    );
}

export default Button;