'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import {
  InlineBlock,
  Mark
} from '../../../../prisma/seeds/helpers/portableText.types';
import { InlineEditorProps } from '../content-editor/content-editor.interface';

interface SelectionOffsets {
  start: number;
  end: number;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function marksToHtml(text: string, marks: Mark[]): string {
  let result = escapeHtml(text);

  if (marks.includes(Mark.Code)) {
    result = `<code>${result}</code>`;
  }

  if (marks.includes(Mark.Em)) {
    result = `<em>${result}</em>`;
  }

  if (marks.includes(Mark.Bold)) {
    result = `<b>${result}</b>`;
  }

  if (marks.includes(Mark.Strong)) {
    result = `<strong>${result}</strong>`;
  }

  if (marks.includes(Mark.Primary)) {
    result = `<span data-cms-mark="primary">${result}</span>`;
  }

  return result;
}

function spansToHtml(spans: InlineBlock[]): string {
  return spans.map((span) => marksToHtml(span.text, span.marks)).join('');
}

function getMarksFromElement(element: HTMLElement | null): Mark[] {
  const marks: Mark[] = [];

  let current: HTMLElement | null = element;

  while (current) {
    const tag = current.tagName.toLowerCase();

    if (tag === 'strong') {
      marks.push(Mark.Strong);
    }

    if (tag === 'b') {
      marks.push(Mark.Bold);
    }

    if (tag === 'em' || tag === 'i') {
      marks.push(Mark.Em);
    }

    if (tag === 'code') {
      marks.push(Mark.Code);
    }

    if (current.dataset.cmsMark === 'primary') {
      marks.push(Mark.Primary);
    }

    current = current.parentElement;
  }

  return [...new Set(marks)];
}

function domToSpans(root: HTMLElement): InlineBlock[] {
  const result: InlineBlock[] = [];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  let node: Node | null = walker.nextNode();

  while (node) {
    const text = node.textContent ?? '';

    if (text.length > 0) {
      const parent = node.parentElement;

      result.push({
        _type: 'span',
        text,
        marks: getMarksFromElement(parent)
      });
    }

    node = walker.nextNode();
  }

  return mergeAdjacentSpans(result);
}

function mergeAdjacentSpans(spans: InlineBlock[]): InlineBlock[] {
  if (spans.length === 0) {
    return [];
  }

  const result: InlineBlock[] = [];

  for (const span of spans) {
    const previous = result[result.length - 1];

    if (
      previous &&
      JSON.stringify(previous.marks) === JSON.stringify(span.marks)
    ) {
      previous.text += span.text;
    } else {
      result.push({
        _type: 'span',
        text: span.text,
        marks: [...span.marks]
      });
    }
  }

  return result;
}

function getSelectionOffsets(root: HTMLElement): SelectionOffsets | null {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  const range = selection.getRangeAt(0);

  if (
    !root.contains(range.startContainer) ||
    !root.contains(range.endContainer)
  ) {
    return null;
  }

  const startRange = document.createRange();

  startRange.selectNodeContents(root);
  startRange.setEnd(range.startContainer, range.startOffset);

  const endRange = document.createRange();

  endRange.selectNodeContents(root);
  endRange.setEnd(range.endContainer, range.endOffset);

  return {
    start: startRange.toString().length,
    end: endRange.toString().length
  };
}

function restoreSelection(
  root: HTMLElement,
  selectionOffsets: SelectionOffsets
): void {
  const selection = window.getSelection();

  if (!selection) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  let node: Node | null = walker.nextNode();

  let currentOffset = 0;
  let startNode: Node | null = null;
  let endNode: Node | null = null;
  let startOffset = 0;
  let endOffset = 0;

  while (node) {
    const length = node.textContent?.length ?? 0;

    if (
      startNode === null &&
      selectionOffsets.start >= currentOffset &&
      selectionOffsets.start <= currentOffset + length
    ) {
      startNode = node;
      startOffset = selectionOffsets.start - currentOffset;
    }

    if (
      endNode === null &&
      selectionOffsets.end >= currentOffset &&
      selectionOffsets.end <= currentOffset + length
    ) {
      endNode = node;
      endOffset = selectionOffsets.end - currentOffset;
    }

    currentOffset += length;

    node = walker.nextNode();
  }

  if (!startNode || !endNode) return;

  const range = document.createRange();

  range.setStart(startNode, startOffset);

  range.setEnd(endNode, endOffset);

  selection.removeAllRanges();
  selection.addRange(range);
}

function toggleMarkOnSelection(root: HTMLElement, mark: Mark): void {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
    return;
  }

  const range = selection.getRangeAt(0);

  if (
    !root.contains(range.startContainer) ||
    !root.contains(range.endContainer)
  ) {
    return;
  }

  const selectionOffsets = getSelectionOffsets(root);

  if (!selectionOffsets) return;

  if (
    mark === Mark.Bold ||
    mark === Mark.Strong ||
    mark === Mark.Em ||
    mark === Mark.Code
  ) {
    toggleSemanticElement(range, mark);
  } else if (mark === Mark.Primary) {
    togglePrimaryElement(range);
  }

  cleanupContentEditable(root);

  restoreSelection(root, selectionOffsets);
}

function toggleSemanticElement(range: Range, mark: Mark): void {
  const tagName =
    mark === Mark.Bold
      ? 'b'
      : mark === Mark.Strong
        ? 'strong'
        : mark === Mark.Em
          ? 'em'
          : 'code';

  const existing = findAncestorElement(range.commonAncestorContainer, tagName);

  if (existing) {
    unwrapElement(existing);
    return;
  }

  const fragment = range.extractContents();

  const wrapper = document.createElement(tagName);

  wrapper.appendChild(fragment);

  range.insertNode(wrapper);
}

function togglePrimaryElement(range: Range): void {
  const existing = findAncestorByDataMark(
    range.commonAncestorContainer,
    'primary'
  );

  if (existing) {
    unwrapElement(existing);
    return;
  }

  const fragment = range.extractContents();

  const wrapper = document.createElement('span');

  wrapper.dataset.cmsMark = 'primary';

  wrapper.appendChild(fragment);

  range.insertNode(wrapper);
}

function findAncestorElement(node: Node, tagName: string): HTMLElement | null {
  let current: HTMLElement | null =
    node instanceof HTMLElement ? node : node.parentElement;

  while (current) {
    if (current.tagName.toLowerCase() === tagName) {
      return current;
    }

    current = current.parentElement;
  }

  return null;
}

function findAncestorByDataMark(node: Node, value: string): HTMLElement | null {
  let current: HTMLElement | null =
    node instanceof HTMLElement ? node : node.parentElement;

  while (current) {
    if (current.dataset.cmsMark === value) {
      return current;
    }

    current = current.parentElement;
  }

  return null;
}

function unwrapElement(element: HTMLElement): void {
  const parent = element.parentNode;

  if (!parent) return;

  while (element.firstChild) {
    parent.insertBefore(element.firstChild, element);
  }

  parent.removeChild(element);
}

function cleanupContentEditable(root: HTMLElement): void {
  root.querySelectorAll('font').forEach((font) => {
    const fragment = document.createDocumentFragment();

    while (font.firstChild) {
      fragment.appendChild(font.firstChild);
    }

    font.replaceWith(fragment);
  });
}

function markIsActive(root: HTMLElement, mark: Mark): boolean {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return false;
  }

  let element: HTMLElement | null =
    selection.anchorNode instanceof HTMLElement
      ? selection.anchorNode
      : (selection.anchorNode?.parentElement ?? null);

  while (element && element !== root) {
    if (mark === Mark.Primary && element.dataset.cmsMark === 'primary') {
      return true;
    }

    const tag = element.tagName.toLowerCase();

    if (mark === Mark.Bold && tag === 'b') {
      return true;
    }

    if (mark === Mark.Strong && tag === 'strong') {
      return true;
    }

    if (mark === Mark.Em && (tag === 'em' || tag === 'i')) {
      return true;
    }

    if (mark === Mark.Code && tag === 'code') {
      return true;
    }

    element = element.parentElement;
  }

  return false;
}

export function InlineEditor({
  value,
  onChange
}: InlineEditorProps): React.ReactElement {
  const editorRef = useRef<HTMLDivElement>(null);

  const [activeMarks, setActiveMarks] = useState<Set<Mark>>(new Set());

  const initialHtmlRef = useRef(spansToHtml(value));

  useEffect(() => {
    const element = editorRef.current;

    if (!element) return;

    if (element.innerHTML === initialHtmlRef.current) {
      return;
    }

    const currentSelection = getSelectionOffsets(element);

    element.innerHTML = spansToHtml(value);

    initialHtmlRef.current = element.innerHTML;

    if (currentSelection) {
      restoreSelection(element, currentSelection);
    }
  }, [value]);

  const handleInput = useCallback(() => {
    const element = editorRef.current;

    if (!element) return;

    const next = domToSpans(element);

    onChange(next);
  }, [onChange]);

  const handleSelectionChange = useCallback(() => {
    const element = editorRef.current;

    if (!element) return;

    const marks = new Set<Mark>();

    for (const mark of Object.values(Mark)) {
      if (markIsActive(element, mark)) {
        marks.add(mark);
      }
    }

    setActiveMarks(marks);
  }, []);

  const applyMark = (mark: Mark) => {
    const element = editorRef.current;

    if (!element) return;

    element.focus();

    toggleMarkOnSelection(element, mark);

    onChange(domToSpans(element));

    handleSelectionChange();
  };

  return (
    <div className="cms-inline-editor">
      <div className="cms-inline-editor__toolbar">
        <button
          type="button"
          className={activeMarks.has(Mark.Bold) ? 'is-active' : undefined}
          onMouseDown={(event) => {
            event.preventDefault();
            applyMark(Mark.Bold);
          }}
        >
          B
        </button>

        <button
          type="button"
          className={activeMarks.has(Mark.Strong) ? 'is-active' : undefined}
          onMouseDown={(event) => {
            event.preventDefault();
            applyMark(Mark.Strong);
          }}
        >
          Strong
        </button>

        <button
          type="button"
          className={activeMarks.has(Mark.Em) ? 'is-active' : undefined}
          onMouseDown={(event) => {
            event.preventDefault();
            applyMark(Mark.Em);
          }}
        >
          I
        </button>

        <button
          type="button"
          className={activeMarks.has(Mark.Primary) ? 'is-active' : undefined}
          onMouseDown={(event) => {
            event.preventDefault();
            applyMark(Mark.Primary);
          }}
        >
          Primary
        </button>

        <button
          type="button"
          className={activeMarks.has(Mark.Code) ? 'is-active' : undefined}
          onMouseDown={(event) => {
            event.preventDefault();
            applyMark(Mark.Code);
          }}
        >
          {'</>'}
        </button>
      </div>

      <div
        ref={editorRef}
        className="cms-inline-editor__content"
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onKeyUp={handleSelectionChange}
        onMouseUp={handleSelectionChange}
        dangerouslySetInnerHTML={{
          __html: initialHtmlRef.current
        }}
      />
    </div>
  );
}
