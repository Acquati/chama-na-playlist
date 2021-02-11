import Layout from './Layout'
import styles from './MainLayout.module.sass'

type Props = {
  children: React.ReactNode
  siteTitle?: string
}

const MainLayout = ({ children, siteTitle = 'Chama na Playlist' }: Props) => (
  <Layout siteTitle={siteTitle}>
    <div className={styles.mainLayout}>
      {children}
    </div>
  </Layout>
)

export default MainLayout
