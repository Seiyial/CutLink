import Tooltip from '@/components/Tooltip'

import { getTimeAgo } from '@/lib/timeAgo'

import { TbWorld } from 'react-icons/tb'
import { IoCopyOutline } from 'react-icons/io5'

interface Props {
  code: string
  alias: string | null
  id: bigint
  createdAt: Date
  originalUrl: string
}

const ShortLinkCard = ({ code, alias, originalUrl, createdAt }: Props) => {
  const name = alias === '' || alias === null ? code : alias
  const shortLinkUrl = `http://localhost:3000/${name}`

  const handleCopyShortLinkUrl = async () => {
    await navigator.clipboard.writeText(shortLinkUrl)
  }

  return (
    <article className='rounded-lg bg-gradient-to-b from-gray-100 to-transparent p-3.5'>
      <h6 className='flex'>
        <TbWorld fontSize='1.7rem' className='self-start' />

        <span className='text-xl font-semibold'>
          <span>/{name}</span>{' '}
          <Tooltip
            className='inline-block align-middle leading-none'
            title='Copy'
          >
            <IoCopyOutline
              className='cursor-pointer text-xl'
              onClick={handleCopyShortLinkUrl}
            />
          </Tooltip>
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
