//@ts-nocheck Ignored file, can be used in the future

import { createProject, getProjects } from '@/lib/prisma/projects'

import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { Project } from '@prisma/client'

type GetResponse = Project[] | undefined
type CreateResponse = Project | undefined

const handler: NextApiHandler<GetResponse | CreateResponse> = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'GET') {
    try {
      const { projects, error } = await getProjects()

      if (error) throw new Error(error)

      return res.status(200).json({ projects })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  if (req.method === 'POST') {
    try {
      const data: Project = req.body
      const { project, error } = await createProject(data)

      if (error) throw new Error(error)

      return res.status(200).json({ project })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
