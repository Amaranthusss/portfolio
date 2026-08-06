'use client';

import { BlockToolbar } from '../block-toolbar/block-toolbar';
import { CodeBlockEditor } from '../code-block-editor/code-block-editor';
import {
  ContentBlockEditorProps,
  HeadingBlock,
  ParagraphBlock,
  QuoteBlock
} from '../content-editor/content-editor.interface';
import { ImageBlockEditor } from '../image-block-editor/image-block-editor';
import { InlineEditor } from '../inline-editor/inline-editor';
import { ListBlockEditor } from '../list-block-editor/list-block-editor';

function isTextBlock(
  block: ContentBlockEditorProps['block']
): block is ParagraphBlock | HeadingBlock | QuoteBlock {
  return block._type === 'block' && block.listItem !== 'bullet';
}

export function ContentBlockEditor({
  block,
  onChange,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast
}: ContentBlockEditorProps): React.ReactElement {
  return (
    <section className="cms-block-editor">
      <BlockToolbar
        block={block}
        onDelete={onDelete}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        isFirst={isFirst}
        isLast={isLast}
      />

      <div className="cms-block-editor__content">
        {isTextBlock(block) && (
          <div className="cms-text-block-editor">
            <select
              value={block.style}
              onChange={(event) => {
                onChange({
                  ...block,
                  style: event.target.value as typeof block.style
                });
              }}
            >
              <option value="normal">Paragraph</option>

              <option value="h1">H1</option>

              <option value="h2">H2</option>

              <option value="h3">H3</option>

              <option value="blockquote">Quote</option>

              <option value="div">Div</option>

              <option value="span">Inline</option>
            </select>

            <InlineEditor
              value={block.children}
              onChange={(children) => {
                onChange({
                  ...block,
                  children
                });
              }}
            />
          </div>
        )}

        {block._type === 'image' && (
          <ImageBlockEditor block={block} onChange={onChange} />
        )}

        {block._type === 'code' && (
          <CodeBlockEditor block={block} onChange={onChange} />
        )}

        {block._type === 'block' && block.listItem === 'bullet' && (
          <ListBlockEditor
            blocks={[block]}
            onChange={(blocks) => {
              onChange(blocks[0]);
            }}
          />
        )}
      </div>
    </section>
  );
}
