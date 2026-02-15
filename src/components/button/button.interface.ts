import type { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
	type?: 'primary' | 'default' | 'text'
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

