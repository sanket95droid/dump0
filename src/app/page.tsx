import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {UserButton, auth} from '@clerk/nextjs'
import {LogIn, Gem} from 'lucide-react'
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

            <div className="flex mt-2">
              {isAuth && (<Button>Go to Chats</Button>)}
            </div>

            {/* <p className='mt-3'>
              Unleash the power of interactive PDFs with our innovative application. Engage, discuss, and understand your documents like never before.
              Its not just reading, its a dynamic conversation with your content.
            </p> */}

            <div className="w-full mt-4 flex-row">
              {isAuth ? (<h1></h1>):(
                <Link href="/sign-in">
                  <Button className="bg-[#0B0D09] shadow-lg">Get Started
                    <LogIn className='ml-2 h-4 w-4 animate-bounce'/>
                  </Button>
                </Link>
              )}
              {isAuth ? (<h1></h1>):(
                <Link href="/pricing" className="ml-3">
                  <Button className="bg-[#0B0D09] shadow-lg">Pricing
                    <Gem className='ml-2 h-4 w-4'/>
                  </Button>
                </Link> 
              )}
            </div>

        </div>
      </div>

      <div className="absolute top-[40%] inset-y-0 right-[5%] w-1/2">
        <div className="flex flex-col">
          <Image src = "" className = "w-1/2 h-3/4" alt = "Application Image"/>

        </div>
      </div>

      <div className="hover:cursor-auto absolute transition-all hover:bg-black left-8 bottom-8 backdrop-blur-sm bg-black/50 text-dark shadow rounded p-2">
        <Link href="https://github.com/sanket95droid/InsightPDF.git" target='_blank'>
        <p className="font-semibold text-sm text-white">Made by sanket95droid</p>
        </Link>
      </div>
    </div>
  )
}
