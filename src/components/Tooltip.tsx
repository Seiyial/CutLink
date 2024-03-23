import type { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
  className?: string
}

const Tooltip = ({ title, className, children }: Props) => {
  return (
    <span className={`group relative ${className}`}>
      {children}

      <span className='bg-grey-50 pointer-events-none absolute -bottom-6 left-1/2 z-10 -translate-x-1/2 -translate-y-1 text-nowrap rounded border bg-slate-950/85 px-[5px] py-[2px] text-xs font-medium tracking-wide text-white opacity-0 backdrop-blur-sm transition-[transform_opacity] duration-300 group-hover:block group-hover:translate-y-0 group-hover:opacity-100'>
        {title}
      </span>
    </span>
  )
}

export default Tooltip
