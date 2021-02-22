import styles from './styles.module.sass'
import SpotifyEmbed from './SpotifyEmbed'

const SpotifyEmbeds = () => {
  return (
    <div className={styles.spotifyEmbeds}>
      <h1>Playlists Recentes</h1>

      <SpotifyEmbed src="https://embed.spotify.com/?uri=spotify:user:oosabaj:playlist:2UDe8QqHAXUaLrdb0QsDGE" />
      <SpotifyEmbed src="https://embed.spotify.com/?uri=spotify:user:oosabaj:playlist:51vBEL5eVtII7uIEDltWwB" />
      <SpotifyEmbed src="https://embed.spotify.com/?uri=spotify:user:dembsky:playlist:7qfcDxieRKE6VOFE3YNKbz" />
      <SpotifyEmbed src="https://embed.spotify.com/?uri=spotify:user:thech053none:playlist:3epVhtO7ZWOB4DzuJFY5da" />
    </div>
  )
}

export default SpotifyEmbeds
