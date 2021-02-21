import styles from './styles.module.sass'

const SpotifyEmbeds = () => {
  return (
    <div className={styles.spotifyEmbeds}>
      <h1>Playlists Recentes</h1>

      <div className={styles.spotifyEmbed}>
        <iframe src="https://embed.spotify.com/?uri=spotify:user:oosabaj:playlist:2UDe8QqHAXUaLrdb0QsDGE" width="340" height="80" frameBorder="0"></iframe>
      </div>
      <div className={styles.spotifyEmbed}>
        <iframe src="https://embed.spotify.com/?uri=spotify:user:oosabaj:playlist:51vBEL5eVtII7uIEDltWwB" width="340" height="80" frameBorder="0"></iframe>
      </div>
      <div className={styles.spotifyEmbed}>
        <iframe src="https://embed.spotify.com/?uri=spotify:user:dembsky:playlist:7qfcDxieRKE6VOFE3YNKbz" width="340" height="80" frameBorder="0"></iframe>
      </div>
      <div className={styles.spotifyEmbed}>
        <iframe src="https://embed.spotify.com/?uri=spotify:user:thech053none:playlist:3epVhtO7ZWOB4DzuJFY5da" width="340" height="80" frameBorder="0"></iframe>
      </div>
    </div>
  )
}

export default SpotifyEmbeds
