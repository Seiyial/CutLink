import type { InputHTMLAttributes, ReactNode } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode
  containerClasses?: string
}

const Input = ({ className, startIcon, containerClasses, ...props }: Props) => {
  return (
    <div className={`relative w-fit ${containerClasses}`}>
      {startIcon && (
        <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-700'>
          {startIcon}
        </div>
      )}

      <input
        className={`rounded border border-gray-200 bg-gray-100 py-2 pr-4 text-gray-700 outline-none placeholder:text-gray-400 ${Boolean(startIcon) ? 'pl-10' : 'pl-4'}  ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input
