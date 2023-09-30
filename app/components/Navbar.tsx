import { buttonVariants } from '@/app/components/ui/button'
import Link from 'next/link'
import React from 'react'
import {HandMetal} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-slate-100 py-2 border-b border-zinc-500 fixed w-full z-10 top-0'>
        <div className='container flex items-center justify-between'>
            <Link href={'/'}><HandMetal/></Link>
            <Link href={'/login'} className={buttonVariants()}>Login</Link>
        </div>
    </div>
  )
}

export default Navbar