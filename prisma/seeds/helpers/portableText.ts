import type { Prisma } from "../../../src/generated/prisma/client";

export type Json = Prisma.InputJsonValue;

export interface JsonObject {
	[key: string]: Json;
}

export type JsonArray = Json[];

export interface Span extends JsonObject {
	_type: "span";
	text: string;
	marks: Mark[];
}

export interface ParagraphBlock extends JsonObject {
	_type: "block";
	style: "normal";
	children: InlineBlock[];
	markDefs: JsonObject[];
}

export interface HeadingBlock extends JsonObject {
	_type: "block";
	style: "h1" | "h2" | "h3";
	children: Span[];
	markDefs: JsonObject[];
}

export interface BulletListItemBlock extends JsonObject {
	_type: "block";
	listItem: "bullet";
	level: number;
	children: Span[];
	markDefs: JsonObject[];
}

export interface QuoteBlock extends JsonObject {
	_type: "block";
	style: "blockquote";
	children: Span[];
	markDefs: JsonObject[];
}

export interface ImageBlock extends JsonObject {
	_type: "image";
	url: string;
	caption: string;
	width: number;
	height: number;
}

export interface CodeBlock extends JsonObject {
	_type: "code";
	language: string;
	code: string;
}

export type ContentBlock =
	| BulletListItemBlock
	| ParagraphBlock
	| HeadingBlock
	| ImageBlock
	| CodeBlock;

export type InlineBlock = Span;

export type PortableContent = ContentBlock[];

export function span(
	text: string,
	marks: Mark[] = []
): Span {
	return {
		_type: "span",
		text,
		marks,
	};
};

export function paragraph(
	...children: InlineBlock[]
): ParagraphBlock {
	return {
		_type: "block",
		style: "normal",
		children,
		markDefs: [],
	};
}

export function heading(
	level: 1 | 2 | 3,
	text: string
): HeadingBlock {
	return {
		_type: "block",
		style: `h${level}`,
		children: [span(text)],
		markDefs: [],
	};
};

export function quote(
	text: string
): QuoteBlock {
	return {
		_type: "block",
		style: "blockquote",
		children: [span(text)],
		markDefs: [],
	};
};

export function image(
	url: string,
	caption: string,
	width: number,
	height: number
): ImageBlock {
	return {
		_type: "image",
		url,
		height,
		width,
		caption,
	};
};

export function bulletList(
	items: (string | Span[])[],
	level = 1
): BulletListItemBlock[] {
	return items.map(item => ({
		_type: "block",
		listItem: "bullet",
		level,
		children: typeof item === "string" ? [span(item)] : item,
		markDefs: []
	}));
}

export function code(
	language: string,
	code: string
): CodeBlock {
	return {
		_type: "code",
		language,
		code,
	};
};

export enum Mark {
	Primary = "primary",
	Strong = "strong",
	Code = "code",
	Em = "em"
};