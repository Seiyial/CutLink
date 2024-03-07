'use client'

import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: string
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className='rounded bg-gray-200 px-4 py-1.5 transition-colors hover:bg-gray-300'
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
