import Link from 'next/link'

import { TbWorld } from 'react-icons/tb'

interface Props {
  code: string
  alias: string | null
  id: string
  createdAt: Date
  originalUrl: string
}

const ShortLinkCard = ({ code, alias, originalUrl, createdAt }: Props) => {
  return (
    <Link href='/'>
      <article className='rounded-lg bg-gradient-to-b from-gray-100 to-transparent p-3.5'>
        <h6 className='flex items-center'>
          <TbWorld fontSize='1.6rem' />
          <span className='text-xl font-semibold'>/{alias ?? code}</span>
        </h6>

        <p className='w-full text-ellipsis text-nowrap text-sm'>
          {originalUrl}
        </p>

        <span className='text-xs font-semibold text-gray-600'>
          {createdAt.toISOString()}
        </span>
      </article>
    </Link>
  )
}

export default ShortLinkCard
