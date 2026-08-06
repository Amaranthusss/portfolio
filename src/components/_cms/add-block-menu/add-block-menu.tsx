'use client';

import {
  code,
  div,
  h1,
  h2,
  h3,
  image,
  inline,
  list,
  paragraph,
  quote
} from '../../../../prisma/seeds/helpers/portableText.dsl';

import type { ContentBlock } from '../content-editor/content-editor.interface';

interface AddBlockMenuProps {
  onAdd: (block: ContentBlock | ContentBlock[]) => void;
}

const BLOCK_TYPES = [
  {
    label: 'Paragraph',
    create: () => paragraph()
  },
  {
    label: 'H1',
    create: () => h1('')
  },
  {
    label: 'H2',
    create: () => h2('')
  },
  {
    label: 'H3',
    create: () => h3('')
  },
  {
    label: 'Quote',
    create: () => quote('')
  },
  {
    label: 'Div',
    create: () => div()
  },
  {
    label: 'Inline',
    create: () => inline()
  },
  {
    label: 'Image',
    create: () => image('', '')
  },
  {
    label: 'Code',
    create: () => code('typescript', '')
  },
  {
    label: 'Bullet list',
    create: () => list([''])
  }
] satisfies ReadonlyArray<{
  label: string;
  create: () => ContentBlock | ContentBlock[];
}>;

export function AddBlockMenu({ onAdd }: AddBlockMenuProps): React.ReactElement {
  return (
    <div className="cms-add-block-menu">
      <div className="cms-add-block-menu__title">Add block</div>

      <div className="cms-add-block-menu__items">
        {BLOCK_TYPES.map((blockType) => (
          <button
            key={blockType.label}
            type="button"
            className="cms-add-block-menu__item"
            onClick={() => onAdd(blockType.create())}
          >
            {blockType.label}
          </button>
        ))}
      </div>
    </div>
  );
}
