"use client";

import { Button } from "../../button/button";

import { useRouter } from "next/navigation";

import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import styles from './header.module.scss';
import { Route } from "@/constants/Route";

export const Header = (): React.ReactNode => {
	const router: AppRouterInstance = useRouter();

	return (
		<header className={styles.header}>
			<Button onClick={(): void => router.push(Route.Homepage)}>Homepage</Button>
			<Button onClick={(): void => router.push(Route.CoursesAndCertifications)}>Courses & Certifications</Button>
			<Button onClick={(): void => router.push(Route.ExperienceAndEducation)}>Experience & Education</Button>
			<Button onClick={(): void => router.push(Route.ProjectsAndRealisations)}>Projects & Realisations</Button>
			<Button onClick={(): void => router.push(Route.CoreTechnologies)}>Core technologies</Button>
			<Button onClick={(): void => router.push(Route.CodeStyle)}>Code style</Button>
			<Button onClick={(): void => router.push(Route.HireMe)} type={'primary'} style={{ textTransform: 'uppercase' }} animated>Hire me</Button>
		</header>
	);
};