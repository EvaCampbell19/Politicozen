import Card from '@/app/components/Card';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  const artists = [
    { title: 'Adrian Pati Franco' },
    {title: 'Konstantinos Tsanakas' },
    {title: 'Earth & Soccer' },
    {title: 'Practice' },
    {title: 'Heavy Funk' },
    { title: 'Ehsan Iranshahi' },
    {title: 'Mozhdeh Malekohgli' },
    {title: 'Earth & Soccer' },
    {title: 'Practice' },
    {title: 'Heavy Funk' },
    { title: 'Ehsan Iranshahi' },
    {title: 'Mozhdeh Malekohgli' },
    {title: 'Earth & Soccer' },
    {title: 'Practice' },
    {title: 'Heavy Funk' },
    { title: 'Ehsan Iranshahi' },
    {title: 'Mozhdeh Malekohgli' },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url('./Banner.png')`,
          height: '960px',
          width: '100%',
        }}
        className="bg-cover bg-center"
      >
        <div className="container mx-auto h-full w-full flex justify-center">
          <div>
            <div className="lg:w-[800px] mt-[11rem] text-center lg:text-left">
              <p className="text-[60px] leading-[60px] font-black justify-center flex">artists</p>
            </div>
            <div className="mt-[25px]">
              <form>
                <input
                  className="p-5 w-full rounded-lg cust_class"
                  type="text"
                  name="search"
                  placeholder="Search all artist of products"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="most-recent pt-[160px] mt-[-450px] bg-transparent">
        <div className="res0 flex justify-center flex-wrap items-start pb-[25px] relative z-[1] ml-[11rem]">
          <div className="res1 grid gap-6 pb-16">
            {artists.map((artist, index) => (
              <div  className=' lg:w-[310px] lg:h-[60px] drop-shadow-sm ' >
              <button className='res3 rounded-full border border-[#DDDDDD]  w-[16rem] h-full '>
              <div className='justify-start flex items-center px-4 gap-4'>             
               <Image src="./checkMark.svg" width={20} height={20}/> <span className='text-[#868686] font-medium text-base'>{artist.title}</span>
              </div>
 
              </button>
              {/* <Card key={index} imageSrc={image.src} title={image.title} /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
// grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3