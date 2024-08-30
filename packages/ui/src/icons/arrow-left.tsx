import type { IconProps } from './types';

export function ArrowLeft({ size = 18, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0008 10.0002C18.0008 10.4144 17.665 10.7502 17.2508 10.7502L4.55524 10.7502L9.78081 15.9702C10.0739 16.2629 10.0741 16.7378 9.78138 17.0308C9.48864 17.3239 9.01377 17.3241 8.72072 17.0314L2.21911 10.5368C2.07836 10.3962 1.99923 10.2054 1.99915 10.0065C1.99907 9.80753 2.07804 9.61671 2.21867 9.47599L2.22246 9.4722C2.22388 9.47076 2.22532 9.46933 2.22676 9.4679L8.72028 2.97068C9.01309 2.6777 9.48796 2.67756 9.78094 2.97037C10.0739 3.26318 10.0741 3.73806 9.78124 4.03103L4.56503 9.25022L17.2508 9.25022C17.665 9.25022 18.0008 9.58601 18.0008 10.0002Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}