import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.sass'

type Props = {
  src: string
}

const useResize = (myRef: any) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setWidth(myRef.current.offsetWidth)
    setHeight(myRef.current.offsetHeight)
  })

  return { width, height }
}

const SpotifyEmbed = (props: Props) => {
  const componentRef = useRef(null)
  const { width, height } = useResize(componentRef)

  return (
    <div ref={componentRef} className={styles.spotifyEmbed}>
      <iframe src={props.src} width={width} height={height} frameBorder="0"></iframe>
    </div>
  )
}

export default SpotifyEmbed
