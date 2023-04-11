import '@/styles/globals.css'
import '@/styles/index.css'
import '@/styles/theme-switcher.css'

import '@arco-design/web-react/dist/css/arco.css'

import NavBar from '@/components/nav-bar'
import LayoutHeader from '@/components/layout-header'
import LayoutFooter from '@/components/layout-footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <LayoutHeader />
      <Component {...pageProps} />
      <LayoutFooter />
    </>
  )
}
