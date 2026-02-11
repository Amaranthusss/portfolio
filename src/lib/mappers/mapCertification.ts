import { mapSkill } from "./mapSkill";

import type { CertificationWithRelations } from "@/models/certificationWithRelations";
import type { CertificationDTO } from "@/models/certificationDto";

export function mapCertification(cert: CertificationWithRelations): CertificationDTO {
	const translation = cert.translations[0] ?? {};

	return {
		id: cert.id,
		slug: cert.slug,
		credentialID: cert.credentialID ?? undefined,
		issueDate: cert.issueDate,
		logoUrl: cert.logoUrl,
		url: cert.url ?? undefined,
		title: translation.title,
		description: translation.description ?? undefined,
		provider: translation.provider ?? undefined,
		skills: cert.skills.map(cs => mapSkill(cs.skill)),
	};
};