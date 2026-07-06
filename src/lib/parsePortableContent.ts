import type { ContentBlock } from '../../prisma/seeds/helpers/portableText.types';
import type { TypedObject } from '@portabletext/types';
import type { Prisma } from '../../src/generated/prisma/client';
import type { Span } from '../../prisma/seeds/helpers/portableText.types';

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function validateSpan(value: unknown): value is Span {
  if (!isObject(value)) return false;
  if (value._type !== 'span') return false;
  if (typeof value.text !== 'string') return false;
  if (!Array.isArray(value.marks)) return false;
  if (!value.marks.every((m) => typeof m === 'string')) return false;

  return true;
}

function validateBlock(value: unknown): value is ContentBlock {
  if (!isObject(value)) return false;
  if (typeof value._type !== 'string') return false;

  if (value._type === 'block') {
    if (!Array.isArray(value.children)) return false;
    if (!value.children.every(validateSpan)) return false;
    if (!Array.isArray(value.markDefs)) return false;

    if ('style' in value) {
      if (typeof value.style !== 'string') return false;
      const allowedStyles = [
        'normal',
        'h1',
        'h2',
        'h3',
        'blockquote',
        'div',
        'span'
      ];
      if (!allowedStyles.includes(value.style)) return false;
    }

    if ('listItem' in value) {
      if (value.listItem !== 'bullet') return false;
      if ('level' in value && typeof value.level !== 'number') return false;
    }

    return true;
  }

  if (value._type === 'image') {
    if (typeof value.url !== 'string') return false;
    if (typeof value.width !== 'number') return false;
    if (typeof value.height !== 'number') return false;
    if (value.caption !== undefined && typeof value.caption !== 'string')
      return false;

    return true;
  }

  if (value._type === 'code') {
    if (typeof value.language !== 'string') return false;
    if (typeof value.code !== 'string') return false;

    return true;
  }

  return false;
}

export function parsePortableContent(value: Prisma.JsonValue): TypedObject[] {
  if (!Array.isArray(value)) return [];

  const result: TypedObject[] = [];

  for (const item of value) {
    if (validateBlock(item)) result.push(item);
    else console.warn('Invalid PortableText block skipped:', item);
  }

  return result;
}
