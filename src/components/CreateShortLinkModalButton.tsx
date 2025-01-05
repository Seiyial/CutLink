import { useState } from 'react'

import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import CreateShortLinkFormModal from '@/components/CreateShortLinkFormModal'

const CreateShortLinkModalButton = () => {
  const [open, setOpen] = useState(false)

  const handleCloseModal = () => setOpen(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='secondary'
          className='border-emerald-500 hover:border-emerald-600 bg-emerald-500 text-white hover:bg-emerald-600'
          size='lg'
        >
          <Plus className='-ml-2 h-5 w-5 mr-2' /> New short link
        </Button>
      </DialogTrigger>

      <CreateShortLinkFormModal onClose={handleCloseModal} />
    </Dialog>
  )
}

export default CreateShortLinkModalButton
