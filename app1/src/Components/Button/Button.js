import React from 'react';

import './Button.css'
import imran from '../Images/imran.jpg'
const Button =({text})=>{

   

    return (

        <>
        <div className="button">
            <a  href={imran}   ><button className="btn" >{text} </button></a>
        </div>
        </>
    )
}

export default Button;