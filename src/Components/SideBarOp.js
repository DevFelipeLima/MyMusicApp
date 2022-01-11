import React from 'react';
import './SbOption.css'

const SideBarOp = ({ title, icon}) => {
    return ( 
        <div className='SbOption'>
            <p>{title}</p>
        </div>
     );
}
 
export default SideBarOp;