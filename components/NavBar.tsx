import styles from './NavBar.module.sass'

const NavBar = () => (
  <div className={styles.navBar}>
    <div className={styles.container}>
      <h1>ChamaNaPlaylist</h1>
      <div>
        <h1>Pesquisar</h1>
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
