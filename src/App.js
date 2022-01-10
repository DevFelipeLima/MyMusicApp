import React, {useEffect, useState} from 'react'
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';
import { useDataProviderValue } from './DataProvider';

const Spotify = new SpotifyWebApi()

function App() {
  const [{user, token}, dispatch]= useDataProviderValue()

  //vai rodar o codigo baseada em uma condição
  useEffect(()=>{
  
    const hash = getTokenFromUrl()
    window.location.hash=""
    const _token = hash.access_token
      if(_token){
        dispatch({
          type: "SET_TOKEN",
          token: _token
        })

        Spotify.setAccessToken(_token)
        Spotify.getMe().then((user)=>{
          dispatch({
            type: "SET_USER",
            user: user,
            })
        })
      }
    },[])
  
  
  return (
    <div className="App">
      {/*Se Existir o token rederizar o Player,
      se não Renderiza a tela de login */}
      {token?<Player Spotify={Spotify}/>:<Login />}

    </div>
  );
}

export default App;
