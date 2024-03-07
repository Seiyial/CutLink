'use client'

import Link from 'next/link'

import SignInWithGitHubButton from '@/components/SignInWithGitHubButton'

export default function GetStatedPage() {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-3 pb-48'>
      <h1 className='w-1/2 text-balance text-center text-6xl font-bold leading-9'>
        START NOW 🤩!
      </h1>
      <h2 className='text-balance text-xl'>
        Registering with{' '}
        <Link
          href='https://github.com/'
          target='_blank'
          className='font-semibold text-gray-400 underline decoration-gray-400 underline-offset-4 transition-colors ease-out hover:text-gray-900 hover:decoration-gray-900'
        >
          GitHub
        </Link>
      </h2>
      <SignInWithGitHubButton />
    </section>
  )
}
