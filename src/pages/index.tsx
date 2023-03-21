import { Card, Space, Spin, Typography } from 'antd'
import ProjectCreator from '@/components/common/ProjectCreator/ProjectCreator'
import Head from 'next/head'

import { trpc } from '../utils/trpc'
import _ from 'lodash'

import { Project } from '@prisma/client'

const Home = (): JSX.Element => {
  const findManyProject = trpc.project.findManyProject.useQuery({})

  if (findManyProject.isLoading) {
    return <Spin size={'large'} />
  }

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
        <Space
          direction={'vertical'}
          size={'middle'}
          style={{ display: 'flex' }}
        >
          <ProjectCreator />

          <Card title={'Projects at the database:'}>
            <div
              style={{
                maxHeight: 500,
                overflowY: 'auto',
              }}
            >
              {findManyProject.isLoading ? (
                <>Is Loading...</>
              ) : (
                _.map(
                  findManyProject.data,
                  ({ title, description, id }: Project): JSX.Element => {
                    return (
                      <Typography.Paragraph type={'success'} key={id}>
                        {title}&nbsp;[{id}]&nbsp;:&nbsp;{description}
                      </Typography.Paragraph>
                    )
                  }
                )
              )}
            </div>
          </Card>
        </Space>
      </main>
    </>
  )
}

export default Home
