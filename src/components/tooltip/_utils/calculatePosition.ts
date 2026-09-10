import type { Position, TooltipSize } from '../tooltip.interface';

import { TooltipPlacement } from '../tooltip.interface';

const TOOLTIP_OFFSET: number = 8;
const VIEWPORT_PADDING: number = 8;

export function calculatePosition(
  trigger: DOMRect,
  tooltip: TooltipSize,
  placement: TooltipPlacement,
  viewportWidth: number,
  viewportHeight: number
): Position {
  const positions: Position[] = getPlacementPositions(
    trigger,
    tooltip,
    placement
  );

  const preferred: Position | undefined = positions[0];

  if (preferred == null) {
    return {
      top: VIEWPORT_PADDING,
      left: VIEWPORT_PADDING,
    };
  }

  const adjustedPreferred: Position = adjustToViewport(
    preferred,
    tooltip,
    placement,
    viewportWidth,
    viewportHeight
  );

  if (fitsViewport(adjustedPreferred, tooltip, viewportWidth, viewportHeight)) {
    return adjustedPreferred;
  }

  for (const candidate of positions.slice(1)) {
    const adjustedCandidate: Position = adjustToViewport(
      candidate,
      tooltip,
      placement,
      viewportWidth,
      viewportHeight
    );

    const isFitForViewport: boolean = fitsViewport(
      adjustedCandidate,
      tooltip,
      viewportWidth,
      viewportHeight
    );

    if (isFitForViewport) return adjustedCandidate;
  }

  return clampToViewport(preferred, tooltip, viewportWidth, viewportHeight);
}

function adjustToViewport(
  position: Position,
  tooltip: TooltipSize,
  placement: TooltipPlacement,
  viewportWidth: number,
  viewportHeight: number
): Position {
  const isHorizontalPlacement: boolean =
    placement === TooltipPlacement.Top ||
    placement === TooltipPlacement.TopStart ||
    placement === TooltipPlacement.TopEnd ||
    placement === TooltipPlacement.Bottom ||
    placement === TooltipPlacement.BottomStart ||
    placement === TooltipPlacement.BottomEnd;

  if (isHorizontalPlacement) {
    return {
      top: position.top,
      left: clamp(
        position.left,
        VIEWPORT_PADDING,
        viewportWidth - tooltip.width - VIEWPORT_PADDING
      ),
    };
  }

  return {
    top: clamp(
      position.top,
      VIEWPORT_PADDING,
      viewportHeight - tooltip.height - VIEWPORT_PADDING
    ),
    left: position.left,
  };
}

function getPlacementPositions(
  trigger: DOMRect,
  tooltip: TooltipSize,
  placement: TooltipPlacement
): Position[] {
  const positions: Record<TooltipPlacement, Position[]> = {
    [TooltipPlacement.Top]: [
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.left + trigger.width / 2 - tooltip.width / 2,
      },
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.left + trigger.width / 2 - tooltip.width / 2,
      },
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.right - tooltip.width,
      },
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.left,
      },
    ],

    [TooltipPlacement.TopStart]: [
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.left,
      },
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.left,
      },
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.right - tooltip.width,
      },
    ],

    [TooltipPlacement.TopEnd]: [
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.right - tooltip.width,
      },
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.right - tooltip.width,
      },
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.left,
      },
    ],

    [TooltipPlacement.Bottom]: [
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.left + trigger.width / 2 - tooltip.width / 2,
      },
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.left + trigger.width / 2 - tooltip.width / 2,
      },
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.right - tooltip.width,
      },
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.left,
      },
    ],

    [TooltipPlacement.BottomStart]: [
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.left,
      },
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.left,
      },
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.right - tooltip.width,
      },
    ],

    [TooltipPlacement.BottomEnd]: [
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.right - tooltip.width,
      },
      {
        top: trigger.top - tooltip.height - TOOLTIP_OFFSET,
        left: trigger.right - tooltip.width,
      },
      {
        top: trigger.bottom + TOOLTIP_OFFSET,
        left: trigger.left,
      },
    ],

    [TooltipPlacement.Left]: [
      {
        top: trigger.top + trigger.height / 2 - tooltip.height / 2,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
      {
        top: trigger.top + trigger.height / 2 - tooltip.height / 2,
        left: trigger.right + TOOLTIP_OFFSET,
      },
      {
        top: trigger.bottom - tooltip.height,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
      {
        top: trigger.top,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
    ],

    [TooltipPlacement.LeftStart]: [
      {
        top: trigger.top,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
      {
        top: trigger.top,
        left: trigger.right + TOOLTIP_OFFSET,
      },
      {
        top: trigger.bottom - tooltip.height,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
    ],

    [TooltipPlacement.LeftEnd]: [
      {
        top: trigger.bottom - tooltip.height,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
      {
        top: trigger.bottom - tooltip.height,
        left: trigger.right + TOOLTIP_OFFSET,
      },
      {
        top: trigger.top,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
    ],

    [TooltipPlacement.Right]: [
      {
        top: trigger.top + trigger.height / 2 - tooltip.height / 2,
        left: trigger.right + TOOLTIP_OFFSET,
      },
      {
        top: trigger.top + trigger.height / 2 - tooltip.height / 2,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
      {
        top: trigger.top,
        left: trigger.right + TOOLTIP_OFFSET,
      },
      {
        top: trigger.bottom - tooltip.height,
        left: trigger.right + TOOLTIP_OFFSET,
      },
    ],

    [TooltipPlacement.RightStart]: [
      {
        top: trigger.top,
        left: trigger.right + TOOLTIP_OFFSET,
      },
      {
        top: trigger.top,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
      {
        top: trigger.bottom - tooltip.height,
        left: trigger.right + TOOLTIP_OFFSET,
      },
    ],

    [TooltipPlacement.RightEnd]: [
      {
        top: trigger.bottom - tooltip.height,
        left: trigger.right + TOOLTIP_OFFSET,
      },
      {
        top: trigger.bottom - tooltip.height,
        left: trigger.left - tooltip.width - TOOLTIP_OFFSET,
      },
      {
        top: trigger.top,
        left: trigger.right + TOOLTIP_OFFSET,
      },
    ],
  };

  return positions[placement];
}

function fitsViewport(
  position: Position,
  tooltip: TooltipSize,
  viewportWidth: number,
  viewportHeight: number
): boolean {
  return (
    position.left >= VIEWPORT_PADDING &&
    position.top >= VIEWPORT_PADDING &&
    position.left + tooltip.width <= viewportWidth - VIEWPORT_PADDING &&
    position.top + tooltip.height <= viewportHeight - VIEWPORT_PADDING
  );
}

function clampToViewport(
  position: Position,
  tooltip: TooltipSize,
  viewportWidth: number,
  viewportHeight: number
): Position {
  return {
    left: clamp(
      position.left,
      VIEWPORT_PADDING,
      viewportWidth - tooltip.width - VIEWPORT_PADDING
    ),
    top: clamp(
      position.top,
      VIEWPORT_PADDING,
      viewportHeight - tooltip.height - VIEWPORT_PADDING
    ),
  };
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), Math.max(minimum, maximum));
}
