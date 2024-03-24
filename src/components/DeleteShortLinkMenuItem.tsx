import { Trash } from 'lucide-react'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

interface Props {
  shortLinkId: bigint
}

const DeleteShortLinkMenuItem = ({ shortLinkId }: Props) => {
  const handleDeleteShortLink = () => {
    console.log(shortLinkId)
  }

  return (
    <DropdownMenuItem onClick={handleDeleteShortLink}>
      <Trash className='mr-2 h-4 w-4' />
      <span>Delete</span>
    </DropdownMenuItem>
  )
}

export default DeleteShortLinkMenuItem
