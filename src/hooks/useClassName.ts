export function useClassName() {
  const cn = (...classes: (string | undefined | null)[]): string => {
    return classes
      .filter((c) => c != null)
      .map((c) => `${c}`)
      .filter((c) => c !== '')
      .join(' ');
  };

  return { cn };
}
