import type { ContentBlock, Span } from "../../prisma/seeds/helpers/portableText";
import type { TypedObject } from "@portabletext/types";
import type { Prisma } from "../../src/generated/prisma/client";

function isObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
};

function validateSpan(span: any): span is Span {
	return (
		isObject(span) &&
		span._type === "span" &&
		typeof span.text === "string" &&
		Array.isArray(span.marks) &&
		span.marks.every(m => typeof m === "string")
	);
};

function validateBlock(block: any): block is ContentBlock {
	if (!isObject(block) || typeof block._type !== "string") return false;

	if (block._type === "block") {
		if (!Array.isArray(block.children)) return false;
		if (!Array.isArray(block.markDefs)) return false;
		return block.children.every(validateSpan);
	}

	if (block._type === "image") {
		return typeof block.url === "string" &&
			(block.caption === undefined || typeof block.caption === "string");
	}

	if (block._type === "code") {
		return typeof block.language === "string" &&
			typeof block.code === "string";
	}

	return false;
};

export function parsePortableContent(
	value: Prisma.JsonValue
): TypedObject[] {
	if (!Array.isArray(value)) return [];

	const result: TypedObject[] = [];

	for (const item of value) {
		if (validateBlock(item)) {
			result.push(item);
		} else {
			console.warn("Invalid block skipped in PortableText:", item);
		}
	}

	return result;
};