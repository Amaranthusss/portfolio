import { Button, ConfigProvider } from 'antd'
import Head from 'next/head'

const Home = (): JSX.Element => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: 'gray' } }}>
      <Head>
        <title>Portfolio - Oskar Szkurłat</title>

        <meta
          name={'description'}
          content={'The first concept of the portfolio web application'}
        />

        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1'}
        />

        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>

      <main>
        <Button type={'primary'}>Ant Design Button</Button>
      </main>
    </ConfigProvider>
  )
}

export default Home
