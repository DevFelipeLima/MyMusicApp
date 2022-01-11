import React from 'react'
import Body from './Body'
import SideBar from './SideBar'
import Footer from './Footer'
import './Player.css'

function Player({ Spotify }) {
    return (
        <div className='Player'>
            <div className='Body'>
                <SideBar />
                <Body/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Player
