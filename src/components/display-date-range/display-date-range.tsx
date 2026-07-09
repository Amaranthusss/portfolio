import { diffYearsMonths } from '@/utils/diffYearsMonths';
import { dateToString } from '@/utils/dateToString';
import { getLocale } from 'next-intl/server';

import type { DisplayDateRangeProps } from './display-date-range.interface';
import type { Locale } from '@/i18n/locale';

export async function DisplayDateRange({
  style,
  endDate,
  startDate,
  isCurrent,
  className,
  now = new Date()
}: DisplayDateRangeProps): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();

  return (
    <span style={style} className={className}>
      {!startDate && !endDate && !isCurrent && <>&ndash;</>}

      {!startDate && endDate && dateToString(endDate, locale)}

      {startDate && isCurrent && (
        <>
          {dateToString(startDate, locale)}
          &nbsp;&ndash;&nbsp;Currently &nbsp;&bull;&nbsp;
          {diffYearsMonths(startDate, now)}
        </>
      )}

      {startDate && endDate && !isCurrent && (
        <>
          {dateToString(startDate, locale)}
          &nbsp;&ndash;&nbsp;
          {dateToString(endDate, locale)}
          &nbsp;&bull;&nbsp;
          {diffYearsMonths(startDate, endDate)}
        </>
      )}

      {startDate && !endDate && !isCurrent && dateToString(startDate, locale)}
    </span>
  );
}
