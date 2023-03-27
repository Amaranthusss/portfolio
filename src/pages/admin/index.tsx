import { Card, Space, Spin, Typography } from 'antd'
import ProjectCreator from '@/components/common/ProjectCreator/ProjectCreator'

import { trpc } from '@/utils/trpc'

import _ from 'lodash'

import { Project } from '@prisma/client'

const AdminPage = (): JSX.Element => {
  const findManyProject = trpc.project.findManyProject.useQuery(
    {},
    { refetchOnWindowFocus: false }
  )

  if (findManyProject.isLoading) {
    return <Spin size={'large'} />
  }

  return (
    <Space direction={'vertical'} size={'middle'} style={{ display: 'flex' }}>
      <ProjectCreator />

      <Card title={'Projects at the database:'}>
        <div style={{ maxHeight: 500, overflowY: 'auto' }}>
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
  )
}

export default AdminPage
