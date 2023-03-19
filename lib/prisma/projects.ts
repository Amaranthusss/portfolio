import prisma from '.'

import { PrismaError } from '@/models/prismaError'
import { Project } from '@prisma/client'

export const getProjects = async () => {
  try {
    const projects: Project[] = await prisma.project.findMany()

    return { projects }
  } catch (error: PrismaError) {
    return { error }
  }
}

export const createProject = async (nextProject: Project) => {
  try {
    const project: Project = await prisma.project.create({ data: nextProject })

    return { project }
  } catch (error: PrismaError) {
    return { error }
  }
}

export const getProjectById = async (id: string) => {
  try {
    const project: Project | null = await prisma.project.findUnique({
      where: { id },
    })

    return { project }
  } catch (error: PrismaError) {
    return { error }
  }
}
