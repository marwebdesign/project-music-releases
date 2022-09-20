import React from 'react';
import data from './data.json';
import {Header} from './Components/Header'
import {AlbumCover} from './Components/Releases'
import {AlbumName} from './Components/Releases'
import {ArtistName} from './Components/Releases'

console.log(data);

export const App = () => {
  return (
    <>
        <div>
      <Header/>
    </div>
    {data.albums.items.map((item)=> {
      return <AlbumName name = {item.name}/>
        // {item.artists.map((artist) => {
        //   return <ArtistName name = {artist.name}/>
        // })}
      })} 
   
    </>
  );
}
