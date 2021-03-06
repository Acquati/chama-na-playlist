import styles from './styles.module.sass'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => (
  <div className={styles.navBar}>
    <div className={styles.container}>
      <h1>ChamaNaPlaylist</h1>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Buscar" />
        <div className={styles.searchIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

      <div>
        <div className={styles.menuToggle}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
)

export default NavBar
