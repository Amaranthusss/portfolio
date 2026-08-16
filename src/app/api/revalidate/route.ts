import { revalidatePath } from 'next/cache';

export async function POST(request: Request): Promise<Response> {
  const revalidateSecret: string | undefined = process.env.REVALIDATE_SECRET;

  if (revalidateSecret == null) {
    return Response.json({ message: 'Unknown' }, { status: 500 });
  }

  const authorization: string | null = request.headers.get('authorization');

  if (authorization !== `Bearer ${revalidateSecret}`) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  revalidatePath('/', 'layout');

  return Response.json({ revalidated: true });
}
