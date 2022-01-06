import React, {useEffect, useState} from 'react'
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';

const Spotify = new SpotifyWebApi()

function App() {
  const [token, setToken]=useState(null)

  //vai rodar o codigo baseada em uma condição
  useEffect(()=>{
    const hash = getTokenFromUrl()
    window.location.hash=""

    const _token = hash.access_token
      if(_token){
        setToken(_token)

        Spotify.setAccessToken(_token)
        Spotify.getMe().then((user)=>{
          console.log('user', user)
        })
      }
    console.log('token ok =>', token)
  },[])
  
  return (
    <div className="App">
      {/*Se Existir o token rederizar o Player,
      se não Renderiza a tela de login */}
      {token?<Player />:<Login />}

    </div>
  );
}

export default App;
