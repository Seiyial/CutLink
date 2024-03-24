import { api } from '@/trpc/react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import type { UpdateShortLink } from '@/types/updateShortLink'
import { updateShortLinkValidation } from '@/validations/updateShortLink.validation'

import { DialogContent } from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'

import Input from '@/components/Input'

interface Props {
  onClose: () => void
  shortLinkId: bigint
  defaultData: UpdateShortLink
}

const UpdateShortLinkFormModal = ({
  onClose,
  shortLinkId,
  defaultData,
}: Props) => {
  const { mutate: mutateUpdateShortLink } = api.shortLink.update.useMutation()
  const apiUtils = api.useUtils()

  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues },
  } = useForm<UpdateShortLink>({
    resolver: zodResolver(updateShortLinkValidation),
    defaultValues: defaultData,
  })

  const handleUpdateShortLinkSubmit = handleSubmit(data => {
    mutateUpdateShortLink(
      { id: shortLinkId, data },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async () => {
          await apiUtils.shortLink.searchShortLinks.invalidate()
          onClose()
        },
      },
    )
  })

  return (
    <DialogContent>
      <form
        className='flex flex-col gap-2'
        onSubmit={handleUpdateShortLinkSubmit}
      >
        <h5 className='text-center text-2xl font-semibold'>
          Update short link
        </h5>

        <Input
          fullWidth
          {...register('alias')}
          defaultValue={defaultValues?.alias ?? ''}
          placeholder='Alias'
          error={!!errors.alias}
          errorMessage={errors.alias?.message}
        />

        <Input
          multiline
          fullWidth
          {...register('description')}
          placeholder='Description'
          error={!!errors.description}
          errorMessage={errors.description?.message}
        />

        <Button className='w-full'>Save</Button>
      </form>
    </DialogContent>
  )
}

export default UpdateShortLinkFormModal
