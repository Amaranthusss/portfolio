import { Button, Card, Space, Spin, Typography } from 'antd'
import Head from 'next/head'

import moment from 'moment'
import _ from 'lodash'

import { trpc } from '../utils/trpc'

import { Project } from '@prisma/client'

const Home = (): JSX.Element => {
  const createOneProject = trpc.project.createOneProject.useMutation()

  const findManyProject = trpc.project.findManyProject.useQuery({
    where: { status: { not: 'DROPPED' } },
  })

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
          <Card title={'Projects:'}>
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
                      <Typography.Paragraph type={'success'}>
                        {title}&nbsp;[{id}]&nbsp;:&nbsp;{description}
                      </Typography.Paragraph>
                    )
                  }
                )
              )}
            </div>
          </Card>

          <Card title={'Back-end tester:'}>
            <Button
              type={'primary'}
              style={{ width: '100%' }}
              onClick={(): void => {
                createOneProject.mutateAsync({
                  data: {
                    description: 'description',
                    endTime: moment().toDate(),
                    startTime: moment().toDate(),
                    fullTitle: 'full-title',
                    slug: 'slug-test',
                    status: 'PROTOTYPE',
                    title: 'title',
                    keyTags: ['NextJS'],
                  },
                })
              }}
            >
              Create a new project
            </Button>
          </Card>
        </Space>
      </main>
    </>
  )
}

export default Home
