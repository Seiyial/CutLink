import { getTimeAgo } from '@/lib/timeAgo'

import { TbWorld } from 'react-icons/tb'

interface Props {
  code: string
  alias: string | null
  id: bigint
  createdAt: Date
  originalUrl: string
}

const ShortLinkCard = ({ code, alias, originalUrl, createdAt }: Props) => {
  return (
    <article className='rounded-lg bg-gradient-to-b from-gray-100 to-transparent p-3.5'>
      <h6 className='flex'>
        <TbWorld fontSize='1.7rem' className='self-start' />

        <span className='text-xl font-semibold'>
          <span>/{!!alias ? alias : code}</span>{' '}
        </span>
      </h6>

      <p className='w-full overflow-hidden text-ellipsis text-nowrap text-sm'>
        {originalUrl}
      </p>

      <span className='text-xs font-semibold text-gray-600'>
        {getTimeAgo(createdAt)}
      </span>
    </article>
  )
}

export default ShortLinkCard
