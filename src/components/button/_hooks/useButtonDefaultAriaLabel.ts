export function useButtonDefaultAriaLabel(
  ariaLabel: string | undefined,
  tooltip: string | undefined
) {
  const ariaLabelToUse: string | undefined =
    ariaLabel != null && ariaLabel.length > 0 ? ariaLabel : tooltip;

  return { ariaLabel: ariaLabelToUse };
}
