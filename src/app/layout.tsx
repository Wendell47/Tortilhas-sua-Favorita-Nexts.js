import './globals.css'
import { Inter, Poppins, Caveat } from 'next/font/google'
import Header from './components/header'

const poppins = Poppins(
  { weight: ['400', '700'],
subsets: ['latin'],
variable: '--font-primary',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-secondary',
})
export const metadata = {
  title: 'Tortilhas sua Favorita',
  description: 'Tortilhas ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <meta name="google-site-verification" content="VXfOmlBNqX3g4drubYjqi-OblHHGuu3ZSgUh1d72JLw" />
      <body className={`${poppins.variable} ${caveat.variable} font-primary`}>
        <Header/>
        {children}</body>
    </html>
  )
}
