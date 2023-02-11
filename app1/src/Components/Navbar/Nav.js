import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
// import Sun from '@iconscout/react-unicons/icons/uil-sun';
import { FcMindMap} from 'react-icons/fc';

const Nav =()=>{
    return(
        <div>
            <header>
                <div className="logo">
                <h1 className="logo-text">PortFolio</h1>
                </div>
                <span > <FcMindMap size={50}/></span>
                <div className="navlist">
                    <ul>
                      <Link className='p-5 text-center bg-black text-wh
                      ' to='/'>home</Link>
                      <Link to='/cart'className='mx-4 text-center p-5 bg-black text-wh
                      '>cart</Link>
                      <span className=' p-5 bg-blue-600 text-center'>cart items:0</span>
                    </ul>
                </div>
                <div className="menu-button">
                    <span className="show"></span>
                    <span className="hide"></span>

                </div>
            </header>
        </div>
    )
}
export default Nav;