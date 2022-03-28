import React from 'react'

interface IIconArrowRight {
  color: string
  className?: string
}

export const IconArrowRight = ({ color, className }: IIconArrowRight) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 14.4 26.9"
      className={className}
    >
      <path d="M1.4,25.5l12-12l-12-12" />
    </svg>
  )
}
