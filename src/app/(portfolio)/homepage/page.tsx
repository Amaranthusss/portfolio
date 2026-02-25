import Image from 'next/image';

import styles from './page.module.scss';

export default function Home(): React.ReactNode {
	return (
		<main className={styles.home_page}>
			<div className={styles.welcome}>
				<div className={styles.header}>
					<span className={styles.marked}>Full-stack & mechatronics engineer</span>
					<span>Oskar Szkurlat</span>
					<span className={styles.description}>Ready to work!</span>
				</div>

				<Image
					className={styles.welcome_image}
					src={'/images/welcome.png'}
					alt={'Welcome image'}
					loading={'eager'}
					width={700}
					height={1050}
				/>

			</div>

			<div className={`${styles.about_me} ${styles.card}`}>
				<h1>About me</h1>

				<p>
					Hi! I’m <strong>Oskar Szkurłat</strong>, a full-stack developer with a background in mechatronics, automation, and robotics.
					I am passionate about creating all kinds of applications and treat developing them as personal challenges.
					I am a creative and driven individual, always eager to explore new technologies. At the same time, my perfectionism pushes me
					to continually improve in the areas I have already mastered.
				</p>
				<p>
					As a <strong>JavaScript</strong> developer, I don't limit myself to just front-end development, I also work on back-end, databases, and server-side technologies.
					When needed, I additionally use <strong>C#</strong>. I am a mechatronics engineer, designing my own electronic circuits, software, and 3D models ready for printing.
					This unique combination allows me to create original solutions from concept to final implementation.
				</p>
				<p>
					I’ve been programming since childhood, starting with creating small games and applications while learning programming languages and computer graphics.
					My journey in mechatronics led me to automate various aspects of my life, including building custom robots, modules, and IoT systems.
					This is where my passion for creation began, shaping my diverse skill set.
				</p>
				<p>
					If you’d like to collaborate or just chat — feel free to contact me!
				</p>
				<p>📫 Email: oskar.szkurlat@gmail.com</p>
				<p>💼 LinkedIn: <a href={'https://www.linkedin.com/in/oskar-szkur%C5%82at-597782305/'}>Oskar Szkurłat</a></p>
			</div>
		</main>
	);
};