export const TriangleRounded: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    className="fill-white stroke-gray-700 stroke-[1.5px] transition-all duration-300"
    {...props}
  >
    <path d="M6.579 3.467c.71-1.067 2.132-1.067 2.842 0L12.975 8.8c.878 1.318.043 3.2-1.422 3.2H4.447c-1.464 0-2.3-1.882-1.422-3.2z"></path>
  </svg>
);
TriangleRounded.displayName = 'TriangleRounded';
