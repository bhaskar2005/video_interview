import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
return (
  <div className=' flex justify-between items-center fixed z-50 w-full px-6 py-4 lg:px-10'>
      <Link href={"/"} className=' flex items-center gap-1'>
      <p className=' text-[26px] font-extralight'>Waiveer Meeting</p>
      </Link>
      <div className=' flwxt-between gap-5'>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
  </div>
)
}

export default Navbar