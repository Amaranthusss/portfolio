import type { Prisma } from '../../../src/generated/prisma/client';

export type Json = Prisma.InputJsonValue;

export interface JsonObject {
  [key: string]: Json;
}

export interface Span extends JsonObject {
  _type: 'span';
  text: string;
  marks: Mark[];
}

export type InlineBlock = Span;

export interface ParagraphBlock extends JsonObject {
  _type: 'block';
  style: 'normal' | 'div' | 'span';
  children: InlineBlock[];
  markDefs: JsonObject[];
}

export interface HeadingBlock extends JsonObject {
  _type: 'block';
  style: 'h1' | 'h2' | 'h3';
  children: InlineBlock[];
  markDefs: JsonObject[];
}

export interface BulletListItemBlock extends JsonObject {
  _type: 'block';
  listItem: 'bullet';
  level: number;
  children: InlineBlock[];
  markDefs: JsonObject[];
}

export interface QuoteBlock extends JsonObject {
  _type: 'block';
  style: 'blockquote';
  children: InlineBlock[];
  markDefs: JsonObject[];
}

export interface ImageBlock extends JsonObject {
  _type: 'image';
  url: string;
  caption: string;
  width: number;
  height: number;
}

export interface CodeBlock extends JsonObject {
  _type: 'code';
  language: string;
  code: string;
}

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | BulletListItemBlock
  | QuoteBlock
  | ImageBlock
  | CodeBlock;

export type PortableContent = ContentBlock[];

export enum Mark {
  Primary = 'primary',
  Strong = 'strong',
  Code = 'code',
  Bold = 'b',
  Em = 'em',
}
