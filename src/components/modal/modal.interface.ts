import type { PropsWithChildren } from "react";

export interface ModalHandle {
	open: () => void
	close: () => void
}

export interface ModalProps extends PropsWithChildren {
	attachToBody?: boolean
	title?: string
	className?: string
	bodyClassName?: string
	toolbarClassName?: string
	onOpen?: () => void
	onClose?: () => void
}