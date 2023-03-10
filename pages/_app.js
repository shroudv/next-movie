import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import '@/styles/responsive.css'

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}


