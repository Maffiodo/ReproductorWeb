import { useState, useEffect } from "react"
import axios from "axios"
import TrackSearchResult from "../TrackSearchResult"
import useAuth from "./useAuth"
import SpotifyWebApi from "spotify-web-api-node"
import Reproductor from "./Reproductor"

const spotifyApi = new SpotifyWebApi({
  clientId: "df7616b6c9ba4ce89f6167a2f11a8a77",
})

export default function NavbarBuscador({ code }) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }

  useEffect(() => {
    if (!playingTrack) return

    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])

    return (
        <div className='navbar'>
        <img src={"https://static.vecteezy.com/system/resources/previews/007/373/899/original/sound-wave-logo-vector.jpg"} className="logo" />
        <div className="texto-izquierda">
            <h2>SOUND<span>WAVE</span></h2>
        </div>
        <input 
          type="search"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)'
          }}
        />
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <div>
        <Reproductor accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
      </div>
    );
  }


