import React from 'react';
import SideBarOp from './SideBarOp';
import './SbOption.css'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';



const SideBar = () => {
    return ( 
        <div className='SideBar'>
            <img className='SbLogo' src="" alt=''/>
        <SideBarOp Icon={HomeIcon}title='Home' />
        <SideBarOp Icon={SearchIcon}title='Seach' />
        <SideBarOp Icon={LibraryMusicIcon}title='Your Library' />
        
        <br />
        <strong className='PL'>Playlist</strong>
        <hr />
        
        </div>

     );
}
 
export default SideBar;