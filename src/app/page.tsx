import { redirect } from 'next/navigation';

import { Route } from '@/constants/Route';

export default function Index(): void {
  redirect('/' + Route.Homepage);
}
