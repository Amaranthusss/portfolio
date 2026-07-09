export function diffYearsMonths(startDate: Date, endDate: Date): string {
  const from: Date = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const to: Date = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
  const parts: string[] = [];

  let years: number = to.getFullYear() - from.getFullYear();
  let months: number = to.getMonth() - from.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const locale: string = navigator.language;
  const nf: Intl.NumberFormat = new Intl.NumberFormat(locale);

  if (years > 0)
    parts.push(`${nf.format(years)} ${years === 1 ? 'year' : 'years'}`);
  if (months > 0)
    parts.push(`${nf.format(months)} ${months === 1 ? 'month' : 'months'}`);

  return parts.join(' ');
}
