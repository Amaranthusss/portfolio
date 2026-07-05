export function useClassName() {
  const cn = (...classes: (string | undefined | null)[]): string => {
    return classes
      .filter((c) => c != null)
      .map((c) => `${c}`)
      .filter((c) => c !== '')
      .join(' ');
  };

  const boolToClass = (
    flag: boolean | undefined,
    className: string
  ): string | null => {
    if (flag == null) return null;
    return flag ? className : null;
  };

  return { cn, boolToClass };
}
