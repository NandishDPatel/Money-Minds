import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-600 text-white flwx items-center flex-col p-5">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="bg-gradient-to-r from-purple-500 to-green-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Manage your Expense with Ease.
  
          <span className="sm:block text-blue-500"> Save some money </span>
        </h1>
  
        <h3 className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
         Start creating your budget and save tons of money
        </h3>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="block w-full rounded-sm border border-blue-600 border-b-2 border-black bg-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-red-200 hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
            href={'/sign-in'}
          >
            Get Started
          </Link>
  
         
        </div>
      </div>
    </div>
    <Image src='/banner-image.png' alt="Banner IMage" height={700} width={1000} className="-mt-10 rounded-xl border-2 mx-auto"/>
  </section>
  )
}

export default Hero
