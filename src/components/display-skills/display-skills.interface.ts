import { SkillDTO } from "@/models/skillDto";

export interface DisplaySkillsProps {
	skills: SkillDTO[];
	style?: React.CSSProperties;
	className?: string
};