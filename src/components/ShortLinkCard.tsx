import ShortLinkOptionsMenu from '@/components/ShortLinkOptionsMenu'
import CopyShortLinkUrlIconButton from '@/components/CopyShortLinkUrlIconButton'

import { getTimeAgo } from '@/lib/timeAgo'

import { TbWorld } from 'react-icons/tb'

interface Props {
  code: string
  alias: string | null
  id: bigint
  createdAt: Date
  originalUrl: string
}

const ShortLinkCard = ({ code, alias, originalUrl, createdAt, id }: Props) => {
  const name = alias ?? code
  const shortLinkUrl = `http://localhost:3000/${name}`

  return (
    <article className='group/card relative rounded-lg border-b border-gray-300 bg-gradient-to-b from-gray-100 to-transparent p-3.5 hover:from-gray-200/80'>
      <h6 className='flex'>
        <TbWorld fontSize='1.6rem' className='self-start' />

        <span className='text-xl font-semibold leading-[1.15]'>
          <span>/{name}</span>{' '}
          <CopyShortLinkUrlIconButton shortLinkUrl={shortLinkUrl} />
        </span>
      </h6>

      <ShortLinkOptionsMenu shortLinkId={id} shortLinkUrl={shortLinkUrl} />

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
