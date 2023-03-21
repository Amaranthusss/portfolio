import type { Dayjs } from 'dayjs'
import { Project } from '@prisma/client'

export interface IFormData {
  fullTitle: Project['fullTitle']
  title: Project['title']
  description: Project['description']
  startTime: Dayjs
  endTime: Dayjs
  status: Project['status']
  keyTags: Project['keyTags']
  image: [
    {
      uid: string
      lastModified: number
      lastModifiedDate: string
      name: string
      size: number
      type: string
      percent: number
      originFileObj: { uid: string }
      status: string
      response: string
    }
  ]
}
