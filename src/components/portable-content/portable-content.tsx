import { PortableText } from "@portabletext/react";
import { PrimaryText } from "@/components/primary-text/primary-text";
import { Suspense } from "react";
import { Figure } from "@/components/figure/figure";

import { getPublicImageUrlFromStorageKey } from "@/lib/storage";
import { memo, lazy } from "react";

import type { PortableTextComponents } from "@portabletext/react";
import type { CodeBlock, ImageBlock } from "../../../prisma/seeds/helpers/portableText.types";
import type { PortableContentProps } from "./portable-content.interface";
import type { PropsWithChildren } from "react";
import type { CodeBlockProps } from "../code-block/code-block.interface";
import type { TypedObject } from "@portabletext/types";

const CodeBlockLazy: React.LazyExoticComponent<({ language, children }: CodeBlockProps) => React.ReactNode> = lazy(() =>
	import("@/components/code-block/code-block").then(m => ({
		default: m.CodeBlock
	}))
);

function normalizeContent(content: PortableContentProps["content"]) {
	if (!Array.isArray(content)) return [];
	return content.filter(Boolean);
};

const PrimaryMark = ({ children }: PropsWithChildren) => <PrimaryText>{children}</PrimaryText>;
const BoldMark = ({ children }: PropsWithChildren) => <b>{children}</b>;
const StrongMark = ({ children }: PropsWithChildren) => <strong>{children}</strong>;
const EmMark = ({ children }: PropsWithChildren) => <em>{children}</em>;
const CodeMark = ({ children }: PropsWithChildren) => <code>{children}</code>;

const ParagraphBlock = ({ children }: PropsWithChildren) => <p>{children}</p>;
const DivBlock = ({ children }: PropsWithChildren) => <div>{children}</div>;
const SpanBlock = ({ children }: PropsWithChildren) => <span>{children}</span>;
const H1Block = ({ children }: PropsWithChildren) => <h1>{children}</h1>;
const H2Block = ({ children }: PropsWithChildren) => <h2>{children}</h2>;
const H3Block = ({ children }: PropsWithChildren) => <h3>{children}</h3>;
const QuoteBlock = ({ children }: PropsWithChildren) => <blockquote>{children}</blockquote>;

const BulletList = ({ children }: PropsWithChildren) => <ul>{children}</ul>;
const BulletListItem = ({ children }: PropsWithChildren) => <li>{children}</li>;

const ImageType = ({ value }: { value: ImageBlock }) => {
	if (!value?.url) return null;

	return (
		<Figure
			src={getPublicImageUrlFromStorageKey(value.url)}
			caption={value.caption}
			width={value.width}
			height={value.height}
			alt={value.caption ?? ""}
		/>
	);
};

const CodeType = ({ value }: { value: CodeBlock }) => {
	if (!value?.code) return null;

	return (
		<Suspense fallback={<pre>{value.code}</pre>}>
			<CodeBlockLazy language={value.language ?? "text"}>
				{value.code}
			</CodeBlockLazy>
		</Suspense>
	);
};

const portableComponents = Object.freeze({
	marks: {
		primary: PrimaryMark,
		b: BoldMark,
		strong: StrongMark,
		em: EmMark,
		code: CodeMark,
	},

	block: {
		normal: ParagraphBlock,
		div: DivBlock,
		span: SpanBlock,
		h1: H1Block,
		h2: H2Block,
		h3: H3Block,
		blockquote: QuoteBlock,
	},

	list: {
		bullet: BulletList,
	},

	listItem: {
		bullet: BulletListItem,
	},

	types: {
		image: ImageType,
		code: CodeType,
	},

} as const satisfies PortableTextComponents);

export const PortableContent = memo(function PortableContent({ content }: PortableContentProps): React.ReactElement | null {
	if (!content || (Array.isArray(content) && content.length === 0)) return null;

	const normalized: TypedObject[] = normalizeContent(content);

	if (normalized.length === 0) return null;

	return <PortableText value={normalized} components={portableComponents} />;
});