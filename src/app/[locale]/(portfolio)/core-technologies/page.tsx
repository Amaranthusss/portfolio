import { PrimaryText } from "@/components/primary-text/primary-text";
import Image from "next/image";

import styles from './page.module.scss';

export default async function CoreTechnologies(): Promise<React.ReactNode> {
	const imageWidth: number = 1000;

	// const polish: React.ReactNode = <>
	// 	Lata doświadczenia pozwoliły mi wypracować własne drzewko technologiczne. Najchętniej wybieranym przeze mnie językiem programowania jest JavaScript, rozszerzony o TypeScript. Uważam TypeScript za nieodzowny element współczesnego developmentu — pozwala zachować wysoką jakość kodu, przewidywalność i bezpieczeństwo typów.
	// 	W obszarze front-endu moim pierwszym wyborem jest React, który cenię za przejrzystość, elastyczność, bogaty ekosystem i łatwość skalowania projektów. Opcjonalnie sięgam również po Angulara, gdy aplikacje wymagającą spójnej architektury. W pracy z warstwą wizualną stawiam na preprocesor SASS, ale również posiadam doświadczenie z LESS. Najchętniej korzystam z biblioteki komponentów AntDesign. Ale dobrze znam również DevExtreme czy Material UI.
	// 	Jako podstawowy build tool głównie wykorzystuję Vite — cenię go za szybkość działania i prostotę konfiguracji. W zakresie zarządzania stanem aplikacji preferuję lekki i wydajny Zustand, choć w bardziej rozbudowanych projektach sięgam po Redux Toolkit. Do walidacji danych często używam Zod, natomiast Lodash stanowi dla mnie niezastąpiony zestaw narzędzi wspierających pracę z danymi.
	// 	Po stronie back-endu najchętniej korzystam z NestJS, który oferuje strukturę i skalowalność idealną dla większych projektów. W przypadku mniejszych aplikacji wybieram Express, ceniąc go za prostotę i szybkość wdrożenia. Framework tRPC wykorzystuję do synchronizacji typów pomiędzy front-endem a back-endem, co zapewnia pełną spójność w aplikacjach TypeScriptowych. Natomiast Socket.IO stosuję tam, gdzie wymagana jest komunikacja w czasie rzeczywistym lub dynamiczne wykrywanie zmian po stronie klienta.
	// 	Do warstwy danych używam ORM-ów takich jak Prisma lub TypeORM, najczęściej w połączeniu z PostgreSQL, SQLite, MySQL bądź MongoDB. W zakresie testów stawiam na prostotę i skuteczność: Jest wykorzystuję do testowania funkcji JavaScript, natomiast Cypress — do testowania komponentów UI i całych przepływów użytkownika. Eslint i Prettier są standardem w moim środowisku pracy, dbając o spójność kodu i przejrzystość repozytoriów.
	// 	W procesie projektowym korzystam z narzędzi takich jak Figma czy Adobe XD, które ułatwiają prototypowanie i współpracę z zespołem UX/UI. Codzienną pracę wspieram systemami kontroli wersji — DevOps, GitLab oraz GitHub, obejmującymi automatyzację, testowanie i ciągłą integrację (CI/CD). Dobrze odnajduję się również w środowisku Atlassian, korzystając z narzędzi takich jak Jira i Confluence, wspierających planowanie, dokumentację i komunikację w zespole.
	// </>;

	return (
		<main className={styles.page}>
			<h1 className={styles.page_title}>Core technologies</h1>

			<div className={styles.content}>
				<p>
					Years of experience have allowed me to develop my own technological roadmap.
					My preferred programming language is <PrimaryText>JavaScript</PrimaryText>, extended with <PrimaryText>TypeScript</PrimaryText>. 
					I consider TypeScript an essential part of modern development — it ensures high code quality, predictability, and type safety.
				</p>
				<p>
					In the front-end area, my first choice is <PrimaryText>React</PrimaryText>, which I appreciate for its clarity, flexibility,
					rich ecosystem, and ease of project scaling. I also occasionally use Angular when applications require
					a consistent architecture. For styling, I prefer the <PrimaryText>SASS</PrimaryText> preprocessor, though I also have experience with LESS.
					My favorite component library is <PrimaryText>AntDesign</PrimaryText>, but I am also well-versed with DevExtreme and Material UI.
				</p>
				<p>
					As my primary build tool, I mainly use <PrimaryText>Vite</PrimaryText> — I value it for its speed and simplicity of configuration.
					For state management, I prefer the lightweight and efficient <PrimaryText>Zustand</PrimaryText>, though for larger projects I use Redux Toolkit.
					I frequently use <PrimaryText>Zod</PrimaryText> for data validation, while Lodash serves as an indispensable set of utilities for working with data.
				</p>
				<p>
					On the back-end side, I most often use <PrimaryText>NestJS</PrimaryText>, which offers structure and scalability ideal for larger projects.
					For smaller applications, I choose <PrimaryText>Express</PrimaryText> for its simplicity and quick setup. 
					I use the <PrimaryText>tRPC</PrimaryText> framework to synchronize types between the front-end and back-end, ensuring full 
					consistency in TypeScript applications. Meanwhile, <PrimaryText>Socket.IO</PrimaryText> is my go-to when real-time communication or dynamic 
					client-side updates are required.
				</p>
				<p>
					For data handling, I use ORMs such as <PrimaryText>Prisma</PrimaryText> or <PrimaryText>TypeORM</PrimaryText>, most often combined 
					with <PrimaryText>PostgreSQL</PrimaryText>, <PrimaryText>SQLite</PrimaryText>, <PrimaryText>MySQL</PrimaryText>, or <PrimaryText>MongoDB</PrimaryText>.
					When it comes to testing, I prioritize simplicity and effectiveness: <PrimaryText>Jest</PrimaryText> for JavaScript function testing,
					and <PrimaryText>Cypress</PrimaryText> for UI component and full user flow testing. <PrimaryText>Eslint</PrimaryText>{' '}
					and <PrimaryText>Prettier</PrimaryText> are standard tools in my workflow, ensuring code consistency and clean repositories.
				</p>
				<p>
					In the design process, I use tools such as <PrimaryText>Figma</PrimaryText> and <PrimaryText>Adobe XD</PrimaryText>, 
					which facilitate prototyping and collaboration with the UX/UI team. My daily work is supported by version control systems 
					— <PrimaryText>DevOps</PrimaryText>, <PrimaryText>GitLab</PrimaryText>, and <PrimaryText>GitHub</PrimaryText> — 
					covering automation, testing, and continuous integration (CI/CD). I’m also comfortable working in the Atlassian ecosystem,
					using tools like <PrimaryText>Jira</PrimaryText> and <PrimaryText>Confluence</PrimaryText> to support planning, documentation, 
					and team communication.
				</p>
			</div>

			<Image
				className={styles.roadmap}
				src={'/images/roadmap.png'}
				alt={'Roadmap'}
				loading={'eager'}
				width={imageWidth}
				height={imageWidth * 1 / 3 + imageWidth}
			/>
		</main>
	);
};