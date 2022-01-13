import React from 'react';
import SideBarOp from './SideBarOp';
import { useDataProviderValue } from '../DataProvider';


import './SbOption.css'


import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';



const SideBar = () => {
    const [{ playlists}, dispatch]=useDataProviderValue()

    return ( 
        <div className='SideBar'>
            <img className='SbLogo' src="LogoMusic.png" alt=''/>
        <SideBarOp Icon={HomeIcon}title='Home' />
        <SideBarOp Icon={SearchIcon}title='Seach' />
        <SideBarOp Icon={LibraryMusicIcon}title='Your Library' />
        
        <br />
        <strong className='PL'>PLAYLIST</strong>
        <hr />
        {playlists?.items?.map(playlist=>(
            <SideBarOp title={playlist.name} />
        ))}
        
        </div>

     );
}
 
export default SideBar;