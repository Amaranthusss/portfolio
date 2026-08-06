import type {
  ContentBlock,
  PortableContent,
  InlineBlock,
  ParagraphBlock,
  HeadingBlock,
  QuoteBlock,
  ImageBlock,
  CodeBlock,
  BulletListItemBlock
} from '../../../../prisma/seeds/helpers/portableText.types';

export type {
  ContentBlock,
  PortableContent,
  InlineBlock,
  ParagraphBlock,
  HeadingBlock,
  QuoteBlock,
  ImageBlock,
  CodeBlock,
  BulletListItemBlock
};

export interface ContentEditorProps {
  projectId: string;
  initialContent: PortableContent;
}

export interface ContentBlockEditorProps {
  block: ContentBlock;
  onChange: (block: ContentBlock) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export interface InlineEditorProps {
  value: InlineBlock[];
  onChange: (value: InlineBlock[]) => void;
}
