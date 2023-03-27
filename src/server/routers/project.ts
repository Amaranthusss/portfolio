//@ts-nocheck Ignored file, can be used in the future

import { router, procedure } from '../trpc'
import { isIsoDateZod } from '@/utils/isIsoDateZod'
import { prisma } from '../prisma'
import { z } from 'zod'
import _ from 'lodash'

import { TRPCError } from '@trpc/server'
import { Project } from '@prisma/client'
import { ProjectModel } from '../../../prisma/zod'

export const projectRouter = router({
  get: procedure.query(async (): Promise<Project[]> => {
    return await prisma.project.findMany()
  }),

  getById: procedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }): Promise<Project> => {
      const { id } = input

      const project: Project | null = await prisma.project.findUnique({
        where: { id },
      })

      if (_.isNil(project)) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No project with id '${id}'`,
        })
      }

      return project
    }),

  create: procedure.input(ProjectModel).query(async ({ input }) => {
    const project = await prisma.project.create({
      data: input,
    })

    if (_.isNil(project)) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: `No project has been created'`,
      })
    }

    return project
  }),
})
