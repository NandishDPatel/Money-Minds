import { UserButton } from '@clerk/nextjs'
import { UserIcon } from 'lucide-react'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
      <div>
        Search bar
      </div>
        <div>
        <UserButton/>
        </div>
    </div>
  )
}

export default DashboardHeader
