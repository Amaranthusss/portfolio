import { defaultSvgProps } from '../../icon.config';

export function VercelIcon(
  props: React.SVGProps<SVGSVGElement>
): React.ReactNode {
  return (
    <svg
      {...defaultSvgProps}
      strokeWidth="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23 21.6479L12 2.35205L1 21.6479H23ZM19.5577 19.6479H4.4423L12 6.39042L19.5577 19.6479Z"></path>
    </svg>
  );
}
