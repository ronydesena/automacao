import React from 'react'

interface IIconLocation {
  color: string
  className?: string
}

export const IconLocation = ({ color, className }: IIconLocation) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.563"
      height="29.169"
      viewBox="0 0 25.563 29.169"
      fill={color}
      className={className}
    >
      <g transform="translate(0 0)">
        <path
          d="M176.782,503.17c-1.985,0-12.782-7.2-12.782-16.387a12.782,12.782,0,1,1,25.563,0C189.563,497.109,177.946,503.17,176.782,503.17Zm-.147-1.929h0Zm.147-25.3a10.85,10.85,0,0,0-10.837,10.837c0,7.561,9.045,13.9,10.8,14.422,1.417-.537,10.876-5.89,10.876-14.422A10.849,10.849,0,0,0,176.782,475.945Z"
          transform="translate(-164 -474)"
        />
      </g>
      <g transform="translate(7.085 7.085)">
        <path
          d="M176.984,492.68a5.7,5.7,0,1,1,5.695-5.7A5.7,5.7,0,0,1,176.984,492.68Zm0-9.448a3.752,3.752,0,1,0,3.75,3.752A3.756,3.756,0,0,0,176.984,483.232Z"
          transform="translate(-171.287 -481.287)"
        />
      </g>
    </svg>
  )
}
