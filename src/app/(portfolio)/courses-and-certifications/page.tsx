import Image from "next/image";

import { getCertifications } from "@/services/getCertifications";

import type { CertificationDTO } from "@/models/certificationDto";

export default async function CoursesAndCertifications(): Promise<React.ReactNode> {
	const certifications: CertificationDTO[] = await getCertifications();

	return (
		<main>
			<b>Courses and Certifications</b>

			{certifications.map(c => <div key={c.id}>
				{c.slug}

				{c.image && (
					<Image
						src={c.image.url}
						alt={c.title ?? c.slug}
						width={64}
						height={64}
					/>
				)}
			</div>)}
		</main>
	);
};