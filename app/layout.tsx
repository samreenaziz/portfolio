import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/footer';
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Samreen Aziz | Professional Portfolio',
  description: 'Samreen is a data scientist, developer, and tech for social good enthusiast with over 5 years of experience in the tech industry.',
  image: "/profile-image.jpg",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        {/* General Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content="Samreen Aziz | Professional Portfolio" />
        <meta property="og:description" content="Samreen is a data scientist, developer, and tech for social good enthusiast with over 5 years of experience in the tech industry." />
        <meta property="og:image" content="https://samreenazizportfolio.vercel.app/public-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samreenazizportfolio.vercel.app/" />
      </Head>
      <body className={`${inter.className} bg-stone-50 text-gray-950 h-[5000px] pt-28 sm:pt-36 sm:px-60` }>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <ToastContainer position="top-right"/>
          <Footer/>
          </ActiveSectionContextProvider>

      </body>
    </html>
  )
}
