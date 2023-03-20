import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'

import '@/styles/index.scss'

const App: AppType = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: 'green' } }}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default trpc.withTRPC(App)
