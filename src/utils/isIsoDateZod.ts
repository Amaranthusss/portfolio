import moment from 'moment'
import { z } from 'zod'

export const isIsoDateZod = () => {
  return z
    .string()
    .refine((arg: string) => moment(arg, moment.ISO_8601).isValid(), {
      message: 'Not a valid ISO string date ',
    })
}
