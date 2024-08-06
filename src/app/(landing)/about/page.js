"use client";
import Custom from '@/app/components/CustomBanner'
import React from 'react'

const page = () => {
  return (
    <>
    <Custom header="About us"/>
    <section className="most-recent pt-[160px] mt-[-450px] bg-transparent">
        <div className='ruby0 flex justify-center items-center mb-[25px] relative z-[1] ml-[11rem] flex-wrap mx-auto'>
        <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full px-4 lg:w-1/2">
              <div class="mb-12 max-w-[540px] lg:mb-0">
                <h2
                  class="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]"
                >
                  Brilliant Toolkit to Build Nextgen Website Faster.
                </h2>
                <p
                  class="mb-10 text-xl  leading-relaxed text-body-color dark:text-dark-6"
                >
                  The main ‘thrust' is to focus on educating attendees on how to
                  best protect highly vulnerable business applications with
                  interactive panel discussions and roundtables led by subject
                  matter experts.
                  <br />
                  <br />
                  The main ‘thrust' is to focus on educating attendees on how to
                  best protect highly vulnerable business applications with
                  interactive panel.
                </p>
        <button
        className='inline-flex items-center bg-[#ffda79] justify-center py-3 text-base font-medium text-center text-black border rounded-md border-primary bg-primary px-7 hover:border-blue-dark'
        >
           Contact Us
        </button>
              </div>
            </div>

            <div class="w-full px-4 lg:w-1/2">
              <div class="flex flex-wrap -mx-2 sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    class="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]"
                  >
                    <img
                      src="./about-image-01.jpg"
                      alt="about image"
                      class="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>

                <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    class="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]"
                  >
                    <img
                      src="./about-image-02.jpg"
                      alt="about image"
                      class="object-cover object-center w-full h-full"
                    />
                  </div>

                  <div
                    class="relative z-10 mb-4 flex   
                    items-center justify-center overflow-hidden bg-[#ffda79]  px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8
                    "
                  >
                    <div>
                      <span class="block text-5xl font-extrabold text-black">
                        09
                      </span>
                      <span class="block text-base font-semibold text-black">
                        We have
                      </span>
                      <span
                        class="block text-base font-medium text-black text-opacity-70"
                      >
                        Years of experience
                      </span>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    </section>
  
    
    </>
  )
}
export default page;