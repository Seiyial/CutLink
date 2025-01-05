import Link from 'next/link'

const MadeBy = () => {
  return (
    <footer className='absolute bottom-0 left-1/2 mb-2 -translate-x-1/2 text-center'>
      Made by{' '}
      <Link
        href='https://emerzonkolki.dev'
        target='_blank'
        className='font-semibold'
        rel='noopener noreferrer'
      >
        Emerzon Javier Kolki Martinez
      </Link>,&nbsp;
      modded by
      <Link
        href='https://syxworks.me'
        target='_blank'
        className='font-semibold'
      >
        SYXWORKS
      </Link>
    </footer>
  )
}

export default MadeBy
