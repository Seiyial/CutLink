import CopyShortLinkUrlIconButton from '@/components/CopyShortLinkUrlIconButton'
import ShortLinkOptionsMenu from '@/components/ShortLinkOptionsMenu'

import { getTimeAgo } from '@/lib/timeAgo'

import { env } from '@/env'
import { TbWorld } from 'react-icons/tb'

interface Props {
  code: string
  alias: string | null
  id: bigint
  createdAt: Date
  originalUrl: string
  description: string | null
}

const ShortLinkCard = ({
  code,
  alias,
  description,
  originalUrl,
  createdAt,
  id,
}: Props) => {
  const name = alias ?? code
  const shortLinkUrl = `${env.NEXT_PUBLIC_HOST}/${name}`

  return (
    <article className='group/card relative rounded-lg border-b border-gray-300 bg-gradient-to-b from-gray-100 to-transparent p-3.5 hover:from-gray-200/80'>
      <h6 className='flex'>
        <TbWorld fontSize='1.6rem' className='self-start' />

        <div className='w-2 shrink-0' />

        <span className='text-xl font-bold font-mono rounded-md bg-sky-500/30 px-1 -ml-1 leading-[1.15]'>
          <span>/{name}</span>
        </span>
      </h6>

      <span className='absolute top-3 right-12'>
        <CopyShortLinkUrlIconButton shortLinkUrl={shortLinkUrl} />
      </span>

      <ShortLinkOptionsMenu
        shortLink={{ alias, description, id }}
        shortLinkUrl={shortLinkUrl}
      />

      <p className='mb-4 mt-2 ml-8 w-full overflow-hidden text-ellipsis text-nowrap text-sm font-medium text-gray-500'>
        {originalUrl}
      </p>

      <p className='text-xs'>{description}</p>

      <span className='text-xs ml-8 font-semibold text-gray-600'>
        {getTimeAgo(createdAt)}
      </span>
    </article>
  )
}

export default ShortLinkCard
