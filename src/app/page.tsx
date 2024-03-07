'use client'

import Link from 'next/link'

import LandingNavbar from '@/components/LandingNavbar'

import Button from '@/components/Button'

import { MdLink } from 'react-icons/md'
import { LiaCutSolid } from 'react-icons/lia'

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center gap-1 pb-48'>
      <LandingNavbar />

      <h1 className='animate-fade-up flex items-center gap-2 text-8xl'>
        <MdLink fontSize='6.2rem' />
        <span className='font-bold'>CutLink</span>
        <LiaCutSolid fontSize='6.2rem' />
      </h1>

      <p className='animate-fade-up animate-delay-150 mb-2 w-2/6 text-center text-gray-600'>
        Transform your long and complicated links into something more
        presentable and easy to remember
      </p>

      <Link
        className='animate-fade-up animate-delay-300'
        href='/getting_started'
      >
        <Button>Get Started</Button>
      </Link>
    </main>
  )
}
