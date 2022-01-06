import React from 'react'
import './Login.css'
import { LoginUrl } from '../spotify'


function Login() {
    return (
        <div className='Login'>
            <img src="LogoMusic.png" alt="" />
           
            {/*login com botao */}
            <a href={LoginUrl}>Login With Spotify</a>
        </div>
    )
}

export default Login
