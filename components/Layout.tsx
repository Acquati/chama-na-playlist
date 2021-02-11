import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
  siteTitle?: string
}

const Layout = ({ children, siteTitle = 'Chama na Playlist' }: Props) => (
  <div>
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/images/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Chama na Playlist"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <NavBar />
    {children}
    <Footer />
  </div>
)

export default Layout
