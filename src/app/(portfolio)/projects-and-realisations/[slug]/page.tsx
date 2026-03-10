import { PortableContent } from "@/components/portable-content/portable-content";
import { Article } from "@/components/article/article";

import { getProject } from "@/services/getProject";

import type { ReactPromise } from "react";
import type { ProjectDTO } from "@/models/projectDto";

export default async function ProjectPage({ params }: {
	params: ReactPromise<{ slug: string }>
	searchParams: ReactPromise<{ slug: string }>
}): Promise<React.ReactNode> {
	const slug: string = (await params).slug
	const project: ProjectDTO | null = await getProject(slug);

	if (project == null) return <>Project not found</>

	return (
		<Article title={project.name}>
			<PortableContent content={project.content} />
		</Article>
	);
};