import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

import { Copy } from 'lucide-react'

interface Props {
  shortLinkUrl: string
}

const CopyShortLinkUrlMenuItem = ({ shortLinkUrl }: Props) => {
  const handleCopyShortLinkUrl = async () => {
    await navigator.clipboard.writeText(shortLinkUrl)
  }

  return (
    <DropdownMenuItem onClick={handleCopyShortLinkUrl}>
      <Copy className='mr-2 h-4 w-4' />
      <span>Copy</span>
    </DropdownMenuItem>
  )
}

export default CopyShortLinkUrlMenuItem
