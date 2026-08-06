'use client';

import { text } from '../../../../prisma/seeds/helpers/portableText.dsl';
import { BulletListItemBlock } from '../content-editor/content-editor.interface';

interface ListBlockEditorProps {
  blocks: BulletListItemBlock[];
  onChange: (blocks: BulletListItemBlock[]) => void;
}

export function ListBlockEditor({
  blocks,
  onChange
}: ListBlockEditorProps): React.ReactElement {
  const updateItem = (index: number, value: string) => {
    const next = [...blocks];

    next[index] = {
      ...next[index],
      children: [text(value)]
    };

    onChange(next);
  };

  const removeItem = (index: number) => {
    const next = blocks.filter((_, itemIndex) => itemIndex !== index);

    onChange(next.length > 0 ? next : [blocks[0]]);
  };

  const addItem = () => {
    const level = blocks[blocks.length - 1]?.level ?? 1;

    onChange([
      ...blocks,
      {
        _type: 'block',
        listItem: 'bullet',
        level,
        children: [text('')],
        markDefs: []
      }
    ]);
  };

  return (
    <div className="cms-list-editor">
      {blocks.map((block, index) => (
        <div key={index} className="cms-list-editor__item">
          <span>•</span>

          <input
            value={block.children.map((child) => child.text).join('')}
            onChange={(event) => updateItem(index, event.target.value)}
          />

          <button
            type="button"
            aria-label="Remove list item"
            onClick={() => removeItem(index)}
          >
            ×
          </button>
        </div>
      ))}

      <button type="button" className="cms-list-editor__add" onClick={addItem}>
        + Add item
      </button>
    </div>
  );
}
