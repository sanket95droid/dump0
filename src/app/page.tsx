import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {UserButton, auth} from '@clerk/nextjs'
import {LogIn, Gem} from 'lucide-react'
import FileUpload from '../components/FileUpload'
import Link from 'next/link'

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-[#505946]">
      <div className="absolute top-[40%] inset-y-0 left-[5%] w-1/3">
        <div className="flex flex-col">
            <div className="flex">
              <h1 className="mr-3 font-semibold text-5xl text-[#E9E9E9]">Elevate Your Document Experience with PDFInsight</h1>
              <UserButton afterSignOutUrl='/'></UserButton>
            </div>

          <div className="flex flex-row">
            <div className="flex mt-4">
              {isAuth && (<Button className="bg-[#0B0D09] shadow-lg">Go to Chats</Button>)}
            </div>

            <div className="w-full mt-4 flex flex-row">
              {isAuth ? (<FileUpload />):(
                <Link href="/sign-up">
                  <Button className="bg-[#0B0D09] shadow-lg transition ease-out">Get Started
                    <LogIn className='ml-2 h-4 w-4 animate-bounce'/>
                  </Button>
                </Link>
              )}
              {
                <Link href="/pricing" className="ml-3">
                  <Button className="bg-[#0B0D09] shadow-lg transition ease-out">Pricing
                    <Gem className='ml-2 h-4 w-4 animate-bounce'/>
                  </Button>
                </Link> 
              }
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-[40%] inset-y-0 right-[5%] w-1/2">
        <div className="flex flex-col">
          <Image src = "" className = "w-1/2 h-3/4" alt = "Application Image"/>
        </div>
      </div>

      <div className="z-1 hover:cursor-auto absolute transition ease-out duration-300 hover:bg-black left-8 bottom-8 backdrop-blur-sm bg-black/50 text-dark shadow rounded p-2">
        <Link href="https://github.com/sanket95droid/InsightPDF.git" target='_blank'>
        <p className="font-semibold text-sm text-white">Made by sanket95droid</p>
        </Link>
      </div>

    </div>
  )
}
