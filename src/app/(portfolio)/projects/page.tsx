import { getProjects } from "@/services/getProjects";

import type { ProjectDTO } from "@/models/projectDto";

export default async function Projects(): Promise<React.ReactNode> {
	const projects: ProjectDTO[] = await getProjects();

	return (
		<main>
			<b>Tabela projektów</b>

			<ul>
				{projects.map(p => <li key={p.id}>{p.name}</li>)}
			</ul>
		</main>
	);
};