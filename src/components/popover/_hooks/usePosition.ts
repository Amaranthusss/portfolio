export function usePosition() {
  const getPosition = (
    trigger: HTMLElement,
    content: HTMLElement,
    placement: string = 'bottom',
    gap = 8,
    padding = 24
  ) => {
    const rect: DOMRect = trigger.getBoundingClientRect();
    const contentWidth: number = content.offsetWidth;
    const contentHeight: number = content.offsetHeight;
    const viewportWidth: number = window.innerWidth;
    const viewportHeight: number = window.innerHeight;
    let top: number = 0;
    let left: number = 0;

    const space = {
      top: rect.top,
      bottom: viewportHeight - rect.bottom,
      left: rect.left,
      right: viewportWidth - rect.right
    };

    const fits = (p: string) => {
      switch (p) {
        case 'top':
          return space.top >= contentHeight + gap + padding;
        case 'bottom':
          return space.bottom >= contentHeight + gap + padding;
        case 'left':
          return space.left >= contentWidth + gap + padding;
        case 'right':
          return space.right >= contentWidth + gap + padding;
        default:
          return true;
      }
    };

    const finalPlacement = fits(placement)
      ? placement
      : placement === 'bottom'
        ? 'top'
        : placement === 'top'
          ? 'bottom'
          : placement === 'right'
            ? 'left'
            : 'right';

    switch (finalPlacement) {
      case 'top':
        top = rect.top - contentHeight - gap + window.scrollY;
        left = rect.left + window.scrollX + rect.width / 2 - contentWidth / 2;
        break;

      case 'bottom':
        top = rect.bottom + gap + window.scrollY;
        left = rect.left + window.scrollX + rect.width / 2 - contentWidth / 2;
        break;

      case 'left':
        top = rect.top + window.scrollY + rect.height / 2 - contentHeight / 2;
        left = rect.left - contentWidth - gap + window.scrollX;
        break;

      case 'right':
        top = rect.top + window.scrollY + rect.height / 2 - contentHeight / 2;
        left = rect.right + gap + window.scrollX;
        break;
    }

    const maxLeft: number =
      window.scrollX + viewportWidth - contentWidth - padding;

    const minLeft: number = window.scrollX + padding;

    const maxTop: number =
      window.scrollY + viewportHeight - contentHeight - padding;

    const minTop: number = window.scrollY + padding;

    left = Math.max(minLeft, Math.min(left, maxLeft));
    top = Math.max(minTop, Math.min(top, maxTop));

    return { top, left };
  };

  return { getPosition };
}
