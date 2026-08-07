import { PrimaryText } from '@/components/primary-text/primary-text';
import { ListModule } from '@/components/list-module/list-module';
import Image from 'next/image';

import styles from './page.module.scss';

export default async function CoreTechnologies(): Promise<React.ReactNode> {
  const imageWidth: number = 1000;

  return (
    <ListModule>
      <h1 className={styles.page_title}>Core technologies</h1>

      <div className={styles.content}>
        <p>
          Years of experience have allowed me to develop my own technological
          roadmap. My preferred programming language is{' '}
          <PrimaryText>JavaScript</PrimaryText>, extended with{' '}
          <PrimaryText>TypeScript</PrimaryText>. I consider TypeScript an
          essential part of modern development — it ensures high code quality,
          predictability, and type safety.
        </p>
        <p>
          In the front-end area, my first choice is{' '}
          <PrimaryText>React</PrimaryText>, which I appreciate for its clarity,
          flexibility, rich ecosystem, and ease of project scaling. I also
          occasionally use Angular when applications require a consistent
          architecture. For styling, I prefer the{' '}
          <PrimaryText>SASS</PrimaryText> preprocessor, though I also have
          experience with LESS. My favorite component library is{' '}
          <PrimaryText>AntDesign</PrimaryText>, but I am also well-versed with
          DevExtreme and Material UI.
        </p>
        <p>
          As my primary build tool, I mainly use <PrimaryText>Vite</PrimaryText>{' '}
          — I value it for its speed and simplicity of configuration. For state
          management, I prefer the lightweight and efficient{' '}
          <PrimaryText>Zustand</PrimaryText>, though for larger projects I use
          Redux Toolkit. I frequently use <PrimaryText>Zod</PrimaryText> for
          data validation, while Lodash serves as an indispensable set of
          utilities for working with data.
        </p>
        <p>
          On the back-end side, I most often use{' '}
          <PrimaryText>NestJS</PrimaryText>, which offers structure and
          scalability ideal for larger projects. For smaller applications, I
          choose <PrimaryText>Express</PrimaryText> for its simplicity and quick
          setup. I use the <PrimaryText>tRPC</PrimaryText> framework to
          synchronize types between the front-end and back-end, ensuring full
          consistency in TypeScript applications. Meanwhile,{' '}
          <PrimaryText>Socket.IO</PrimaryText> is my go-to when real-time
          communication or dynamic client-side updates are required.
        </p>
        <p>
          For data handling, I use ORMs such as{' '}
          <PrimaryText>Prisma</PrimaryText> or{' '}
          <PrimaryText>TypeORM</PrimaryText>
          <PrimaryText>Drizzle</PrimaryText>, most often combined with{' '}
          <PrimaryText>PostgreSQL</PrimaryText>,{' '}
          <PrimaryText>SQLite</PrimaryText>, <PrimaryText>MySQL</PrimaryText>,
          or <PrimaryText>MongoDB</PrimaryText>. When it comes to testing, I
          prioritize simplicity and effectiveness:{' '}
          <PrimaryText>Jest</PrimaryText> for JavaScript function testing, and{' '}
          <PrimaryText>Cypress</PrimaryText> for UI component and full user flow
          testing. <PrimaryText>Eslint</PrimaryText> and{' '}
          <PrimaryText>Prettier</PrimaryText> are standard tools in my workflow,
          ensuring code consistency and clean repositories.
        </p>
        <p>
          In the design process, I use tools such as{' '}
          <PrimaryText>Figma</PrimaryText> and{' '}
          <PrimaryText>Adobe XD</PrimaryText>, which facilitate prototyping and
          collaboration with the UX/UI team. My daily work is supported by
          version control systems — <PrimaryText>DevOps</PrimaryText>,{' '}
          <PrimaryText>GitLab</PrimaryText>, and{' '}
          <PrimaryText>GitHub</PrimaryText> — covering automation, testing, and
          continuous integration (CI/CD). I’m also comfortable working in the
          Atlassian ecosystem, using tools like <PrimaryText>Jira</PrimaryText>{' '}
          and <PrimaryText>Confluence</PrimaryText> to support planning,
          documentation, and team communication.
        </p>
      </div>

      <Image
        className={styles.roadmap}
        src={'/images/roadmap.png'}
        alt={'Roadmap'}
        loading={'eager'}
        width={imageWidth}
        height={(imageWidth * 1) / 3 + imageWidth}
      />
    </ListModule>
  );
}
