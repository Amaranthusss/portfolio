import { createContext } from '@/server/context'
import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '../../../../prisma/generated/routers'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
})
