import type { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const IconButton = ({
  children,
  className: extraClasses,
  ...btnProps
}: Props) => {
  return (
    <button
      className={`grid place-content-center rounded p-2 ${extraClasses}`}
      {...btnProps}
    >
      {children}
    </button>
  )
}

export default IconButton
