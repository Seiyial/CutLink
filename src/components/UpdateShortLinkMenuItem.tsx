import { Edit } from 'lucide-react'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

interface Props {
  shortLinkId: bigint
}

const UpdateShortLinkMenuItem = ({ shortLinkId }: Props) => {
  const handleOpenFormUpdate = () => {
    console.log(shortLinkId)
  }

  return (
    <DropdownMenuItem onClick={handleOpenFormUpdate}>
      <Edit className='mr-2 h-4 w-4' />
      <span>Edit</span>
    </DropdownMenuItem>
  )
}

export default UpdateShortLinkMenuItem
