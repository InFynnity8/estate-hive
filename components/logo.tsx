import { cn } from '@/lib/utils'
import React from 'react'

const Logo = ({ dark }: {dark: boolean}) => {
  return (
    <div className='flex items-center gap-0'>
      <p className={cn(
        "font-medium text-2xl",
        dark
          ? "text-white"
          : "text-black "
      )} >ESTATE</p>
      <span className='font-light text-2xl text-red-600'>HIVE</span>
    </div>
  )
}

export default Logo