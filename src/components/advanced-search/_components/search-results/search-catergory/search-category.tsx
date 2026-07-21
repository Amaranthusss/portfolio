'use client';
import { SearchElement } from './search-element/search-element';
import { Title } from '@/components/title/title';

import type { SearchCategoryProps } from './search-category.interface';
import type { Key } from 'react';

import styles from './search-category.module.scss';

export function SearchCategory<DtoItem extends object>({
  data,
  title,
  route,
  keyExpr,
  textExpr,
  slugExpr,
  onNavigate
}: SearchCategoryProps<DtoItem>): React.ReactNode {
  if (data.length === 0) return;

  return (
    <>
      <Title>{title}</Title>

      <ul className={styles.list}>
        {data.map((item: DtoItem): React.ReactNode => {
          const slug: string = slugExpr(item);
          const text: string = textExpr(item);
          const key: Key = keyExpr(item);

          if (text.length === 0) return;

          return (
            <SearchElement
              key={key}
              slug={slug}
              text={text}
              route={route}
              onNavigate={onNavigate}
            />
          );
        })}
      </ul>
    </>
  );
}
