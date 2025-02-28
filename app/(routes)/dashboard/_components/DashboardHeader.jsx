import { UserButton } from '@clerk/nextjs'
import { UserIcon } from 'lucide-react'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='p-5 shadow-sm border-b flex justify-end me-3'>
        <div>
        <UserButton/>
        </div>
    </div>
  )
}

export default DashboardHeader
