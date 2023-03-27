import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Button, Card, Form } from 'antd'
import Inputs from './Inputs/Inputs'

import { useCallback } from 'react'

import { nanoid } from 'nanoid'
import { trpc } from '@/utils/trpc'
import _ from 'lodash'

import { useRouter } from 'next/router'

import { NextRouter } from 'next/router'
import { IFormData } from './ProjectCreator.interface'

import styles from './ProjectCreator.module.scss'

const ProjectCreator = (): JSX.Element => {
  const router: NextRouter = useRouter()

  const createOneProject = trpc.project.createOneProject.useMutation()

  const [form] = Form.useForm()

  const onFinish = useCallback(
    (values: IFormData): void => {
      createOneProject.mutate({
        data: {
          ...values,
          slug: nanoid(8),
          startTime: values.startTime.toISOString(),
          endTime: values.endTime.toISOString(),
          image: JSON.stringify(_.first(values.image)),
        },
      })
    },
    [createOneProject]
  )

  return (
    <Card
      title={'Project Creator:'}
      extra={
        <Button
          icon={<AiOutlineCloseCircle size={32} />}
          type={'text'}
          onClick={(): void => {
            router.push('/')
          }}
        />
      }
    >
      <Form form={form} onFinish={onFinish} className={styles.form}>
        <Inputs />

        <Form.Item>
          <Button
            type={'primary'}
            htmlType={'submit'}
            className={styles.submit}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default ProjectCreator
