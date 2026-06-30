import { useCallback, useEffect } from "react";

export const useCloseShortcut = (
	isOpen: boolean,
	close: () => void
): void => {
	const closeOnEscapeKey = useCallback((e: KeyboardEvent): void => {
		if (!isOpen || e.key !== "Escape") return;

		close();
	}, [isOpen, close])

	useEffect((): (() => void) => {
		if (!isOpen) return () => { };

		document.addEventListener('keydown', closeOnEscapeKey);

		return (): void => {
			document.removeEventListener('keydown', closeOnEscapeKey);
		}
	}, [isOpen, closeOnEscapeKey])
}