import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="  pb-0 bg-black  text-white">
    <div className=' container mx-auto'>
    <div
        class="container mx-auto  gird-cols-1 grid  md:grid-cols-3 ">
        <div class="md:mb-6 md:ms-auto  col-span-2 lg:ms-0 border-gray-400 border-r  ">
          <p className='py-10'>
          <Image src="./LogoWhite.svg" alt="logo" height={80} width={69} />
          </p>
          <div className="w-full p-4 border-b border-t border-gray-400">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 ">
          <div className="flex flex-col  py-4 lg:flex-row ">
                        <a href="https://pagedone.io/" className="flex  "></a>
                        <ul className="items-cente justify-center gap-14 text-center text-lg transition-all duration-500 sm:flex lg:gap-10 xl:gap-14">
                            <li>
                                <a href="/categories" className="text-white text-base hover:text-gray-400">
                                    Categories
                                </a>
                            </li>
                            <li className="my-2 sm:my-0">
                                <a href="/how-it-works" className="text-white text-base hover:text-gray-400">
                                  Products
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-white text-base hover:text-gray-400">
                                    Artists
                                    </a>
                            </li>
                            <li>
                                <a href="/about" className="text-white text-base hover:text-gray-400">
                                    About
                                    </a>
                            </li>
                            <li>
                                <a href="/faq" className="text-white text-base hover:text-gray-400">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                        <div className="flex  space-x-4 sm:justify-center  "></div>
                    </div>
                    </div>
                    </div>
        </div>

        <div class="relative md:mb-6  border-gray-400 border-b" >
        <div className=' p-8'>
        <div className='pt-4'>
          <p className='text-base'>call</p>
          <h5 className='font-bold text-lg'>+1408-835-0739</h5>
          </div>
          <div className='pt-[4rem] '>
          <p className='text-base'>Email Address</p>
          <h5 className='font-bold text-lg'>chi@politicozen.com</h5>
          </div>
          </div>
        </div>

        
      </div>
      <div className="container w-full py-4">
                <div className="mx-auto ">
                    <div className="">
                        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                            <span className="text-sm text-gray-500 ">
                            Copyright © 2024 Politicozen. All Rights Reserved.
                            </span>
                            <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0 ">
                                <a
                                    href="javascript:;"
                                    className=" items-centerhover:bg-gray-900 flex justify-center duration-500"
                                >
                                   <Image src="./Facebook.svg" alt="logo" height={50} width={50} />
                                </a>

                                <a
                                    href="javascript:;"
                                    className="relative flex items-center justify-center duration-500  hover:bg-gray-900 "
                                >
                                   <Image src="./Instagram.svg" alt="logo" height={50} width={50} />
                                </a>
                                <a
                                    href="javascript:;"
                                    className="relative flex items-center justify-center duration-500  hover:bg-gray-900 "
                                >
                                   <Image src="./Twitter.svg" alt="logo" height={50} width={50} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
            </div>

  )
}
