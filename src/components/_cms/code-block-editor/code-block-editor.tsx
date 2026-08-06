'use client';

import { CodeBlock } from '../content-editor/content-editor.interface';

interface CodeBlockEditorProps {
  block: CodeBlock;
  onChange: (block: CodeBlock) => void;
}

const LANGUAGES = [
  'typescript',
  'javascript',
  'tsx',
  'jsx',
  'css',
  'scss',
  'html',
  'json',
  'csharp',
  'bash',
  'sql',
  'text'
] as const;

export function CodeBlockEditor({
  block,
  onChange
}: CodeBlockEditorProps): React.ReactElement {
  return (
    <div className="cms-code-editor">
      <label>
        Language
        <select
          value={block.language}
          onChange={(event) => {
            onChange({
              ...block,
              language: event.target.value
            });
          }}
        >
          {LANGUAGES.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </label>

      <textarea
        value={block.code}
        spellCheck={false}
        placeholder="Write code..."
        onChange={(event) => {
          onChange({
            ...block,
            code: event.target.value
          });
        }}
      />
    </div>
  );
}
