'use client';

import { ImageBlock } from '../content-editor/content-editor.interface';

interface ImageBlockEditorProps {
  block: ImageBlock;
  onChange: (block: ImageBlock) => void;
}

export function ImageBlockEditor({
  block,
  onChange
}: ImageBlockEditorProps): React.ReactElement {
  return (
    <div className="cms-image-editor">
      <div className="cms-image-editor__preview">
        {block.url ? (
          <img
            src={block.url}
            alt={block.caption}
            width={block.width}
            height={block.height}
          />
        ) : (
          <div className="cms-image-editor__empty">No image</div>
        )}
      </div>

      <div className="cms-image-editor__fields">
        <label>
          Image URL
          <input
            type="text"
            value={block.url}
            placeholder="/images/example.jpg"
            onChange={(event) => {
              onChange({
                ...block,
                url: event.target.value
              });
            }}
          />
        </label>

        <label>
          Caption
          <input
            type="text"
            value={block.caption}
            onChange={(event) => {
              onChange({
                ...block,
                caption: event.target.value
              });
            }}
          />
        </label>

        <div className="cms-image-editor__dimensions">
          <label>
            Width
            <input
              type="number"
              min={1}
              value={block.width}
              onChange={(event) => {
                const width = Number(event.target.value);

                onChange({
                  ...block,
                  width: Number.isFinite(width) && width > 0 ? width : 1
                });
              }}
            />
          </label>

          <label>
            Height
            <input
              type="number"
              min={1}
              value={block.height}
              onChange={(event) => {
                const height = Number(event.target.value);

                onChange({
                  ...block,
                  height: Number.isFinite(height) && height > 0 ? height : 1
                });
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
