/** Copyright (c) 2024, Tegon, all rights reserved. **/

import type { IconProps } from './types';

export function TriageLine({ size = 18, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19C5.02945 19 1 14.9706 1 9.99998C1 5.02945 5.02945 1 10 1C14.9706 1 19.0001 5.02945 19.0001 9.99998C19.0001 14.9706 14.9706 19 10 19ZM10 17.2C13.9765 17.2 17.2001 13.9765 17.2001 9.99998C17.2001 6.02356 13.9765 2.8 10 2.8C6.02356 2.8 2.8 6.02356 2.8 9.99998C2.8 13.9765 6.02356 17.2 10 17.2ZM6.35357 11.7535C6.03859 11.4386 6.26167 10.9 6.70712 10.9H13.1C13.3762 10.9 13.6 11.1238 13.6 11.4V12.2C13.6 12.4761 13.3762 12.7 13.1 12.7H10.5C10.2239 12.7 10 12.9238 10 13.2V14.1929C10 14.6383 9.46147 14.8614 9.14649 14.5464L6.35357 11.7535ZM9.50004 7.30002C9.77618 7.30002 10 7.07616 10 6.80002V5.80711C10 5.36166 10.5386 5.13857 10.8536 5.45355L13.6465 8.24642C13.9615 8.5614 13.7384 9.09998 13.2929 9.09998H6.90001C6.62387 9.09998 6.40001 8.87612 6.40001 8.59998V7.80002C6.40001 7.52387 6.62387 7.30002 6.90001 7.30002H9.50004Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}
