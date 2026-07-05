import { defaultSvgProps } from '../../icon.config';

export function EducationIcon(
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
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 4h2v5l-1-.75L9 9zm9 16H6V4h1v9l3-2.25L13 13V4h5z"></path>
    </svg>
  );
}
