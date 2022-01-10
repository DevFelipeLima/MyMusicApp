import React from 'react'
import Body from './Body'
import SideBar from './SideBar'
import './Player.css'

function Player({ Spotify }) {
    return (
        <div className='Player'>
            <div className='Body'>
                <SideBar />
                <Body/>

            </div>
        </div>
    )
}

export default Player
