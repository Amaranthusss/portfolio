import { Button, Card } from 'antd'
import Head from 'next/head'

import { useRouter } from 'next/router'

import _ from 'lodash'

import { NextRouter } from 'next/router'

const Home = (): JSX.Element => {
  const router: NextRouter = useRouter()

  return (
    <>
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
        <Card title={'Portfolio - Oskar Szkurłat'}>
          <Button
            style={{ width: '100%' }}
            type={'primary'}
            onClick={(): void => {
              router.push('/admin')
            }}
          >
            Admin panel
          </Button>
        </Card>
      </main>
    </>
  )
}

export default Home
