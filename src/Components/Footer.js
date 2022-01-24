import React from 'react';

import  PlayCircleOutlineIcon  from '@material-ui/icons/PlayCircleOutline';
import  SkipPreviousIcon  from '@material-ui/icons/SkipPrevious';
import  SkipNextIcon  from '@material-ui/icons/SkipNext';
import  ShuffleIcon from '@material-ui/icons/Shuffle';
import  RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlay from "@material-ui/icons/PlaylistPlay"
import VolumeDown from '@material-ui/icons/VolumeDown';
import  VolumeUp from '@material-ui/icons/VolumeUp';



import './Footer.css'

const Footer = () => {
    return ( 
        <div className='Footer'>
            <div className='Footer_1'>
                 Album
            </div>
            <div className='Footer_2'>
                <ShuffleIcon className='Shuffle'/>
                <SkipPreviousIcon className='Previous'/>
                <PlayCircleOutlineIcon className='Play' />
                <SkipNextIcon className='Skip'/>
                <RepeatIcon className='Repeat'/>
            </div>
            <div className='Footer_3'>
            <Grid container spacing={2} >
                <Grid item>
                    <PlaylistPlay />
                </Grid>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
                <Grid item >
                    <VolumeUp />
                </Grid>


            </Grid>
            </div>
        </div>
     );
}
 
export default Footer;