import '@/styles/globals.css'
import '@/styles/index.css'
import '@/styles/theme-switcher.css'

import '@arco-design/web-react/dist/css/arco.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
