"use client";

import { Button } from "../../button/button";

import { useRouter } from "next/navigation";

import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import styles from './header.module.scss';

export const Header = (): React.ReactNode => {
	const router: AppRouterInstance = useRouter();

	return (
		<header className={styles.header}>
			<Button onClick={(): void => router.push('home')}>Homepage</Button>
			<Button onClick={(): void => router.push('projects')}>Experience & Education</Button>
			<Button onClick={(): void => router.push('projects')}>Projects & Realisations</Button>
			<Button onClick={(): void => router.push('projects')}>Core technologies</Button>
			<Button onClick={(): void => router.push('projects')}>Code style</Button>
			<Button onClick={(): void => router.push('projects')} type={'primary'} style={{ textTransform: 'uppercase' }} animated>Hire me</Button>
		</header>
	);
};