import React from 'react';
import './SbOption.css'

const SideBarOp = ({ title, Icon}) => {
    return ( 
        <div className='SbOption'>
            {Icon && <Icon className="SbOption_Icon" />}
            {Icon?<h4>{title}</h4>: <p>{title}</p>}
        </div>
     );
}
 
export default SideBarOp;