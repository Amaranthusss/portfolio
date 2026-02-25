import { getPublicImageUrlFromStorageKey } from "../storage";
import { mapSkill } from "./mapSkill";

import type { CertificationWithRelations } from "@/models/certificationWithRelations";
import type { CertificationDTO } from "@/models/certificationDto";
import type { ImageFileDTO } from "@/models/imageFileDto";

export function mapCertification(cert: CertificationWithRelations): CertificationDTO {
	const translation = cert.translations[0] ?? {};

	const image: ImageFileDTO | undefined = cert.imageFile != null ? {
		fileName: cert.imageFile.fileName,
		extension: cert.imageFile.extension,
		id: cert.imageFile.id,
		mimeType: cert.imageFile.mimeType,
		url: getPublicImageUrlFromStorageKey(cert.imageFile.storageKey),
		size: cert.imageFile.size
	} : undefined

	return {
		image,
		id: cert.id,
		slug: cert.slug,
		credentialID: cert.credentialID ?? undefined,
		issueDate: cert.issueDate,
		url: cert.url ?? undefined,
		title: translation.title,
		description: translation.description ?? undefined,
		provider: translation.provider ?? undefined,
		skills: cert.skills.map(cs => mapSkill(cs.skill)),
	};
};