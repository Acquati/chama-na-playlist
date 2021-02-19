// import { GetStaticProps } from 'next'
import MainLayout from '../components/MainLayout'
import SpotifyEmbeds from '../components/SpotifyEmbeds'

const IndexPage = () => (
  <MainLayout siteTitle="Home">
    <SpotifyEmbeds />
  </MainLayout>
)

export default IndexPage
