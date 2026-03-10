import type { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
	style?: React.CSSProperties;
	className?: string;
	type?: 'primary' | 'default' | 'text';
	animated?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

