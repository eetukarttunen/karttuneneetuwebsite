import React from 'react';
import './Nappi.css';
import{Link} from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Nappi = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize 
}) => {

const checkButtonStyle = STYLES.includes(buttonStyle)
 ? buttonStyle 
 : STYLES[0];

const checkButtonSize = SIZES.includes(buttonSize) 
? buttonSize 
: SIZES[0];

return(
    // buttonin sisälle tulevat renderöidään
    <Link to ='https://www.linkedin.com/in/eetu-karttunen-912631160' className='btn-mobile'>
              <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};