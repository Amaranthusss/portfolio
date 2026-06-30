import type { ImageBlock, CodeBlock, ContentBlock } from './portableText.types';
import type { InlineBlock, ParagraphBlock } from './portableText.types';
import type { HeadingBlock, QuoteBlock } from './portableText.types';
import type { PortableContent, Span } from './portableText.types';
import type { BulletListItemBlock } from './portableText.types';

import { Mark } from './portableText.types';

function span(text: string, marks: Mark[] = []): Span {
  return {
    _type: 'span',
    text,
    marks,
  };
}

export function text(value: string): Span {
  return span(value);
}

export function strong(value: string): Span {
  return span(value, [Mark.Strong]);
}

export function primary(value: string): Span {
  return span(value, [Mark.Primary]);
}

export function em(value: string): Span {
  return span(value, [Mark.Em]);
}

export function bold(value: string): Span {
  return span(value, [Mark.Bold]);
}

export function codeInline(value: string): Span {
  return span(value, [Mark.Code]);
}

export function paragraph(...children: InlineBlock[]): ParagraphBlock {
  return {
    _type: 'block',
    style: 'normal',
    children,
    markDefs: [],
  };
}

export function h1(textValue: string): HeadingBlock {
  return {
    _type: 'block',
    style: 'h1',
    children: [span(textValue)],
    markDefs: [],
  };
}

export function h2(textValue: string): HeadingBlock {
  return {
    _type: 'block',
    style: 'h2',
    children: [span(textValue)],
    markDefs: [],
  };
}

export function h3(textValue: string): HeadingBlock {
  return {
    _type: 'block',
    style: 'h3',
    children: [span(textValue)],
    markDefs: [],
  };
}

export function quote(textValue: string): QuoteBlock {
  return {
    _type: 'block',
    style: 'blockquote',
    children: [span(textValue)],
    markDefs: [],
  };
}

export function image(
  url: string,
  caption: string,
  width = 800,
  height = 500
): ImageBlock {
  return {
    _type: 'image',
    url,
    caption,
    width,
    height,
  };
}

export function code(language: string, value: string): CodeBlock {
  return {
    _type: 'code',
    language,
    code: value,
  };
}

export function list(
  items: (string | InlineBlock[])[],
  level = 1
): BulletListItemBlock[] {
  return items.map((item) => ({
    _type: 'block',
    listItem: 'bullet',
    level,
    children: typeof item === 'string' ? [span(item)] : item,
    markDefs: [],
  }));
}

export function section(
  title: string,
  blocks: ContentBlock[]
): PortableContent {
  return [h2(title), ...blocks];
}

export function content(
  ...blocks: (ContentBlock | ContentBlock[])[]
): PortableContent {
  const result: ContentBlock[] = [];

  for (const block of blocks) {
    if (Array.isArray(block)) {
      result.push(...block);
    } else {
      result.push(block);
    }
  }

  return result;
}

export function div(...children: InlineBlock[]): ParagraphBlock {
  return {
    _type: 'block',
    style: 'div',
    children,
    markDefs: [],
  };
}

export function inline(...children: InlineBlock[]): ParagraphBlock {
  return {
    _type: 'block',
    style: 'span',
    children,
    markDefs: [],
  };
}
