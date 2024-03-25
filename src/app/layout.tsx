import '@/styles/globals.css'

import { Inter } from 'next/font/google'

import { TRPCReactProvider } from '@/trpc/react'

import { Toaster } from '@/components/ui/toaster'
import MadeBy from '@/components/MadeBy'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'CutLink',
  description: 'Shortener URL, made by Emerzon Javier Kolki Martinez',
  icons: [{ rel: 'icon', url: '/favicon.png' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`font-sans ${inter.variable} relative min-h-screen`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <MadeBy />
        <Toaster />
      </body>
    </html>
  )
}
