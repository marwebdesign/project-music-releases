import React from 'react';
import data from './data.json';
import { Header } from './Components/Header'
import { Cover } from './Components/Cover'
import { Album } from './Components/Album'
import { Artist } from './Components/Artist'

console.log(data);

export const App = () => {
  return (
    <>
      <section className="outer-wrapper">
        <div className="header">
          <Header />
        </div>
        <section className="container" >
          {data.albums.items.map((item) => {
            return (
              <>
                <div className="albumCard">
                  <div className="coverImage">
                    <Cover
                      key={item.images[1].url}
                      image={item.images[1].url}
                    />
                  </div>
                  <div className="albumName">
                    <Album
                      key={item.external_urls.id}
                      name={item.name}
                      url={item.external_urls.spotify}
                    />
                  </div>
                  <div className="artistName">
                    <Artist
                      key={item.artists[0].id}
                      name={item.artists[0].name}
                      url={item.artists[0].href}
                      artist={item.artists}
                    />
                  </div>
                </div>
              </>
            )
          })}
        </section>
      </section>

    </>
  );
}
