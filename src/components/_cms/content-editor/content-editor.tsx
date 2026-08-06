'use client';

import { useMemo, useState, useTransition } from 'react';
import { BulletListItemBlock, ContentBlock } from './content-editor.interface';
import { AddBlockMenu } from '../add-block-menu/add-block-menu';
import { ContentBlockEditor } from '../content-block-editor/content-block-editor';
import { PortableContent } from '@/components/portable-content/portable-content';

interface ProjectContentEditorProps {
  projectId: number;
  initialContent: PortableContentValue;
}

function isBulletListItem(block: ContentBlock): block is BulletListItemBlock {
  return block._type === 'block' && block.listItem === 'bullet';
}

export function ProjectContentEditor({
  projectId,
  initialContent
}: ProjectContentEditorProps): React.ReactElement {
  const [content, setContent] = useState<PortableContentValue>(initialContent);

  const [isPending, startTransition] = useTransition();

  const [saved, setSaved] = useState(true);

  const updateContent = (
    updater: (content: PortableContentValue) => PortableContentValue
  ) => {
    setContent((current) => {
      const next = updater(current);

      setSaved(false);

      return next;
    });
  };

  const handleSave = () => {
    startTransition(async () => {
      await updateProjectContent(projectId, content);

      setSaved(true);
    });
  };

  const addBlock = (index: number, block: ContentBlock) => {
    updateContent((current) => {
      const next = [...current];

      next.splice(index, 0, block);

      return next;
    });
  };

  const updateBlock = (index: number, block: ContentBlock) => {
    updateContent((current) => {
      const next = [...current];

      next[index] = block;

      return next;
    });
  };

  const deleteBlock = (index: number) => {
    updateContent((current) =>
      current.filter((_, currentIndex) => currentIndex !== index)
    );
  };

  const moveBlock = (index: number, direction: -1 | 1) => {
    updateContent((current) => {
      const targetIndex = index + direction;

      if (targetIndex < 0 || targetIndex >= current.length) {
        return current;
      }

      const next = [...current];

      const currentBlock = next[index];

      next[index] = next[targetIndex];

      next[targetIndex] = currentBlock;

      return next;
    });
  };

  const groupedBlocks = useMemo(() => {
    const result: Array<
      | {
          type: 'block';
          index: number;
          block: ContentBlock;
        }
      | {
          type: 'list';
          index: number;
          blocks: BulletListItemBlock[];
        }
    > = [];

    let index = 0;

    while (index < content.length) {
      const block = content[index];

      if (isBulletListItem(block)) {
        const listBlocks: BulletListItemBlock[] = [];

        const startIndex = index;

        while (index < content.length && isBulletListItem(content[index])) {
          listBlocks.push(content[index] as BulletListItemBlock);

          index++;
        }

        result.push({
          type: 'list',
          index: startIndex,
          blocks: listBlocks
        });

        continue;
      }

      result.push({
        type: 'block',
        index,
        block
      });

      index++;
    }

    return result;
  }, [content]);

  const updateList = (
    startIndex: number,
    oldLength: number,
    blocks: BulletListItemBlock[]
  ) => {
    updateContent((current) => {
      const next = [...current];

      next.splice(startIndex, oldLength, ...blocks);

      return next;
    });
  };

  return (
    <div className="cms-editor">
      <header className="cms-editor__header">
        <div>
          <h1>Project content</h1>

          {!saved && <span className="cms-editor__dirty">Unsaved changes</span>}

          {saved && <span className="cms-editor__saved">Saved</span>}
        </div>

        <button
          type="button"
          className="cms-editor__save"
          disabled={isPending || saved}
          onClick={handleSave}
        >
          {isPending ? 'Saving...' : 'Save'}
        </button>
      </header>

      <div className="cms-editor__layout">
        <div className="cms-editor__column">
          <div className="cms-editor__column-header">Editor</div>

          <div className="cms-editor__blocks">
            {groupedBlocks.map((entry, entryIndex) => {
              if (entry.type === 'list') {
                return (
                  <div key={`list-${entry.index}`} className="cms-list-group">
                    <div className="cms-block-toolbar">
                      <span className="cms-block-toolbar__type">
                        Bullet list
                      </span>

                      <div className="cms-block-toolbar__actions">
                        <button
                          type="button"
                          disabled={entryIndex === 0}
                          onClick={() => moveBlock(entry.index, -1)}
                        >
                          ↑
                        </button>

                        <button
                          type="button"
                          disabled={entryIndex === groupedBlocks.length - 1}
                          onClick={() =>
                            moveBlock(entry.index + entry.blocks.length - 1, 1)
                          }
                        >
                          ↓
                        </button>

                        <button
                          type="button"
                          className="cms-block-toolbar__delete"
                          onClick={() =>
                            updateList(entry.index, entry.blocks.length, [])
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="cms-list-editor">
                      {entry.blocks.map((item, itemIndex) => (
                        <div
                          key={`${entry.index}-${itemIndex}`}
                          className="cms-list-editor__item"
                        >
                          <span>•</span>

                          <input
                            value={item.children
                              .map((child) => child.text)
                              .join('')}
                            onChange={(event) => {
                              const next = [...entry.blocks];

                              next[itemIndex] = {
                                ...next[itemIndex],
                                children: [
                                  {
                                    _type: 'span',
                                    text: event.target.value,
                                    marks: []
                                  }
                                ]
                              };

                              updateList(
                                entry.index,
                                entry.blocks.length,
                                next
                              );
                            }}
                          />

                          <button
                            type="button"
                            onClick={() => {
                              if (entry.blocks.length === 1) {
                                updateList(entry.index, 1, []);

                                return;
                              }

                              const next = entry.blocks.filter(
                                (_, currentIndex) => currentIndex !== itemIndex
                              );

                              updateList(
                                entry.index,
                                entry.blocks.length,
                                next
                              );
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        className="cms-list-editor__add"
                        onClick={() => {
                          const level =
                            entry.blocks[entry.blocks.length - 1]?.level ?? 1;

                          updateList(entry.index, entry.blocks.length, [
                            ...entry.blocks,
                            {
                              _type: 'block',
                              listItem: 'bullet',
                              level,
                              children: [
                                {
                                  _type: 'span',
                                  text: '',
                                  marks: []
                                }
                              ],
                              markDefs: []
                            }
                          ]);
                        }}
                      >
                        + Add item
                      </button>
                    </div>

                    <AddBlockMenu
                      onAdd={(block) => {
                        if (Array.isArray(block)) {
                          updateContent((current) => {
                            const next = [...current];

                            next.splice(
                              entry.index + entry.blocks.length,
                              0,
                              ...block
                            );

                            return next;
                          });
                        } else {
                          addBlock(entry.index + entry.blocks.length, block);
                        }
                      }}
                    />
                  </div>
                );
              }

              return (
                <div key={entry.block._type + '-' + entry.index}>
                  <ContentBlockEditor
                    block={entry.block}
                    isFirst={entry.index === 0}
                    isLast={entry.index === content.length - 1}
                    onChange={(block) => updateBlock(entry.index, block)}
                    onDelete={() => deleteBlock(entry.index)}
                    onMoveUp={() => moveBlock(entry.index, -1)}
                    onMoveDown={() => moveBlock(entry.index, 1)}
                  />

                  <AddBlockMenu
                    onAdd={(block) => {
                      if (Array.isArray(block)) {
                        updateContent((current) => {
                          const next = [...current];

                          next.splice(entry.index + 1, 0, ...block);

                          return next;
                        });
                      } else {
                        addBlock(entry.index + 1, block);
                      }
                    }}
                  />
                </div>
              );
            })}

            {content.length === 0 && (
              <AddBlockMenu
                onAdd={(block) => {
                  if (Array.isArray(block)) {
                    setContent(block);
                  } else {
                    setContent([block]);
                  }

                  setSaved(false);
                }}
              />
            )}
          </div>
        </div>

        <div className="cms-editor__column">
          <div className="cms-editor__column-header">Live preview</div>

          <div className="cms-editor__preview">
            <PortableContent content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
