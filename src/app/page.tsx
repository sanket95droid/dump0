import Image from 'next/image'
import {Button} from '@/components/ui/button'
import { auth } from '@clerk/nextjs'

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
    <div className="main text-red-800">
      <h1>Insight-PDF</h1>
      <h3>Insight-PDF</h3>
      <Button>Click Me</Button>
    </div>
  )
}
