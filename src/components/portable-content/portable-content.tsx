import { PortableText } from "@portabletext/react";
import { PrimaryText } from "@/components/primary-text/primary-text";
import { CodeBlock } from "@/components/code-block/code-block";
import { Figure } from "@/components/figure/figure";

import { getPublicImageUrlFromStorageKey } from "@/lib/storage";

import type { PortableTextComponents } from "@portabletext/react";
import type { PortableContentProps } from "./portable-content.interface";

const portableComponents: PortableTextComponents = {
	marks: {
		primary: ({ children }) => (
			<PrimaryText>{children}</PrimaryText>
		),
	},

	types: {
		image: ({ value }) => {
			if (!value.url || !value.width || !value.height) return <></>;

			return (
				<Figure
					src={getPublicImageUrlFromStorageKey(value.url)}
					caption={value.caption}
					width={value.width}
					height={value.height}
					alt={value.caption}
				/>
			);
		},

		code: ({ value }) => (
			<CodeBlock language={value.language} >
				{value.code}
			</CodeBlock>
		),
	},
};

export function PortableContent({ content }: PortableContentProps): React.ReactNode {
	return <PortableText
		value={content}
		components={portableComponents}
	/>
}; 