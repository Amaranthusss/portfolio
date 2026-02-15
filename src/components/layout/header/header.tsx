"use client";

import { Button } from "../../button/button";

import { useRouter } from "next/navigation";

import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import styles from './header.module.scss';

export const Header = (): React.ReactNode => {
	const router: AppRouterInstance = useRouter();

	return (
		<header className={styles.header}>
			<Button onClick={(): void => router.push('home')}>Home page</Button>
			<Button onClick={(): void => router.push('about-me')}>About me</Button>
			<Button onClick={(): void => router.push('projects')} type={'primary'}>Projects</Button>
		</header>
	);
};