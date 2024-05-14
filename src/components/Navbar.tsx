'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
    const pathname = usePathname()
  return (
    <div className='h-16 flex justify-between items-center px-6'>
        <div>
            <Link href='/' className='font-bold text-lg text-yellow-300'>NEOWYZE</Link>
        </div>
        <ul className='flex gap-2'>
            <li className='flex items-center'>
                <Link href='/movies' 
                    className={`rounded-md inline-block p-2 
                                ${pathname === '/movies' ? 'bg-yellow-300 text-black' : 'border border-yellow-300'}`}
                                >Movies</Link>
            </li>
            <li className='flex items-center'>
                <Link href='/characters' className={`rounded-md inline-block p-2 
                                ${pathname === '/characters' ? 'bg-yellow-300 text-black' : 'border border-yellow-300'}`}
                                >Characters</Link>
            </li>
        </ul>
    </div>
  )
}
