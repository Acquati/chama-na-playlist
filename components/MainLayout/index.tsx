import Layout from '../Layout'
import styles from './styles.module.sass'

type Props = {
  children: React.ReactNode
  siteTitle?: string
}

const MainLayout = ({ children, siteTitle = 'Chama na Playlist' }: Props) => (
  <Layout siteTitle={siteTitle}>
    <div className={styles.mainLayout}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  </Layout>
)

export default MainLayout
