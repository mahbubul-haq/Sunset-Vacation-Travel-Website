import React from "react";
import './button.css';
import { Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];
const SIZES = ['btn--medium','btn--large'];

export const button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle =STYLES.includes(buttonStyle)
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ?buttonSize :SIZES[0];
    return(
        <Link className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                {children}
            </button>
            <button>I'm flexible</button>
        </Link>
    )
};
