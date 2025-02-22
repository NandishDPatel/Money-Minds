import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border shadow-md">
      <Image src="/logo.png" alt="Logo image" height={100} width={160}/>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header
