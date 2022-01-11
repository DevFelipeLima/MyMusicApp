import React from 'react';
import SideBarOp from './SideBarOp';

const SideBar = () => {
    return ( 
        <div className='SideBar'>
            <img className='SbLogo' src="LogoMusic.png" alt=''/>
        <SideBarOp title='Home' />
        <SideBarOp title='Seach' />
        <SideBarOp title='Your Library' />
        
        
        </div>

     );
}
 
export default SideBar;