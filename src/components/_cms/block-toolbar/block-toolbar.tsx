'use client';

import type { ContentBlock } from '../content-editor/content-editor.interface';

interface BlockToolbarProps {
  block: ContentBlock;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}

function getBlockLabel(block: ContentBlock): string {
  if (block._type === 'image') {
    return 'Image';
  }

  if (block._type === 'code') {
    return 'Code';
  }

  if (block.listItem === 'bullet') {
    return 'Bullet list item';
  }

  switch (block.style) {
    case 'h1':
      return 'H1';

    case 'h2':
      return 'H2';

    case 'h3':
      return 'H3';

    case 'blockquote':
      return 'Quote';

    case 'div':
      return 'Div';

    case 'span':
      return 'Inline';

    case 'normal':
    default:
      return 'Paragraph';
  }
}

export function BlockToolbar({
  block,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast
}: BlockToolbarProps): React.ReactElement {
  return (
    <div className="cms-block-toolbar">
      <span className="cms-block-toolbar__type">{getBlockLabel(block)}</span>

      <div className="cms-block-toolbar__actions">
        <button
          type="button"
          disabled={isFirst}
          aria-label="Move block up"
          onClick={onMoveUp}
        >
          ↑
        </button>

        <button
          type="button"
          disabled={isLast}
          aria-label="Move block down"
          onClick={onMoveDown}
        >
          ↓
        </button>

        <button
          type="button"
          aria-label="Delete block"
          className="cms-block-toolbar__delete"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
