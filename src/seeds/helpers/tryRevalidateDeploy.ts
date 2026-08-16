export async function tryRevalidateDeploy(): Promise<void> {
  const deployUrl: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;
  const revalidateSecret: string | undefined = process.env.REVALIDATE_SECRET;

  if (deployUrl == null || revalidateSecret == null) {
    return console.log('== Cache revalidation skipped ==');
  }

  try {
    const response: Response = await fetch(`${deployUrl}/api/revalidate`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${revalidateSecret}` },
    });

    if (!response.ok) {
      throw new Error(
        `Cache revalidation failed with status ${response.status}`
      );
    }

    console.log('== Cache revalidated ==');
  } catch (error) {
    console.log('== Cache revalidation dropped ==');
  }
}
