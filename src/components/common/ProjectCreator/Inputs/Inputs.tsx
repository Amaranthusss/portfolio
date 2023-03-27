import { DatePicker, Form, Input, Select, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { useMemo } from 'react'

import _ from 'lodash'

import { Project, ProjectStatus, KeyTag } from '@prisma/client'
import type { SelectProps } from 'antd'

import styles from '../ProjectCreator.module.scss'

enum InputDataType {
  'file',
  'string',
  'keyTags',
  'dateTime',
  'projectStatus',
}

interface RequiredPoolDef {
  inputDataType: InputDataType
  key: keyof Project
}

const stringTypedProjectData: RequiredPoolDef[] = [
  { key: 'fullTitle', inputDataType: InputDataType.string },
  { key: 'title', inputDataType: InputDataType.string },
  { key: 'description', inputDataType: InputDataType.string },
  { key: 'startTime', inputDataType: InputDataType.dateTime },
  { key: 'endTime', inputDataType: InputDataType.dateTime },
  { key: 'status', inputDataType: InputDataType.projectStatus },
  { key: 'keyTags', inputDataType: InputDataType.keyTags },
  { key: 'image', inputDataType: InputDataType.file },
]

const Inputs = (): JSX.Element => {
  const inputs = useMemo((): JSX.Element[] => {
    return _.map(
      stringTypedProjectData,
      ({ key, inputDataType }: RequiredPoolDef): JSX.Element => {
        let inputComponent: JSX.Element = <Input />

        if (_.isEqual(inputDataType, InputDataType.dateTime)) {
          inputComponent = <DatePicker />
        }

        const isKeyTags: boolean = _.isEqual(
          inputDataType,
          InputDataType.keyTags
        )

        const isProjectStatus: boolean = _.isEqual(
          inputDataType,
          InputDataType.projectStatus
        )

        const isSelectInput: boolean = isProjectStatus || isKeyTags

        if (isSelectInput) {
          const options: string[] = isProjectStatus
            ? _.keys(ProjectStatus)
            : _.keys(KeyTag)

          const selectMode: SelectProps['mode'] = isProjectStatus
            ? undefined
            : 'multiple'

          inputComponent = (
            <Select mode={selectMode}>
              {_.map(options, (value: string): JSX.Element => {
                return (
                  <Select.Option key={value} value={value}>
                    {value}
                  </Select.Option>
                )
              })}
            </Select>
          )
        }

        const isFile: boolean = _.isEqual(inputDataType, InputDataType.file)

        if (isFile) {
          inputComponent = (
            <Upload listType={'picture'} maxCount={1}>
              <PlusOutlined />
              &nbsp;Upload
            </Upload>
          )
        }

        const normFile = (e: any) => {
          if (_.isArray(e)) {
            return e
          }

          return e?.fileList
        }

        return (
          <Form.Item
            name={key}
            key={key}
            label={key}
            rules={[{ required: true }]}
            className={styles.formItem}
            valuePropName={isFile ? 'fileList' : undefined}
            getValueFromEvent={isFile ? normFile : undefined}
          >
            {inputComponent}
          </Form.Item>
        )
      }
    )
  }, [])

  return <div className={styles.inputs}>{...inputs}</div>
}

export default Inputs
