'use client'
import { Header } from "@/components/header/header";

import type { SearchResultsProps } from "./search-results.interface";

export function SearchResults({ results }: SearchResultsProps): React.ReactNode {
	if (results == null) return;

	return (
		<div>
			<Header>Certifications:</Header>
			{results.certifications.map(c => <div key={c.slug}>{c.title}</div>)}

			<Header>Education:</Header>
			{results.education.map(e => <div key={e.slug}>{e.degree ?? '-'}</div>)}

			<Header>Experience:</Header>
			{results.experience.map(e => <div key={e.slug}>{e.position ?? '-'}</div>)}

			<Header>Projects:</Header>
			{results.projects.map(p => <div key={p.slug}>{p.name}</div>)}

			<Header>Publications:</Header>
			{results.publications.map(p => <div key={p.slug}>{p.title}</div>)}
		</div>
	);
}