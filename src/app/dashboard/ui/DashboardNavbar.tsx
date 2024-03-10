'use client'

import type { User } from 'next-auth'
import { signOut } from 'next-auth/react'

import Logo from '@/components/Logo'
import IconButton from '@/components/IconButton'

import Profile from '@/app/dashboard/ui/Profile'

import { IoExitOutline } from 'react-icons/io5'

const DashboardNavbar = ({ image, name }: User) => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <nav className='flex justify-between pb-4 pt-6'>
      <Logo />

      <menu className='flex items-center gap-2'>
        <Profile image={image} name={name} />
        <IconButton
          className='bg-red-600 text-2xl text-white hover:bg-red-700'
          onClick={handleSignOut}
        >
          <IoExitOutline />
        </IconButton>
      </menu>
    </nav>
  )
}

export default DashboardNavbar
