import Card from '@/app/components/Card';
import React from 'react';

export default function Page() {
  const images = [
    { src: './product1.svg', title: 'Leash' },
    { src: './product2.svg', title: 'Mental Health' },
    { src: './product3.svg', title: 'Earth & Soccer' },
    { src: './product4.svg', title: 'Practice' },
    { src: './product5.svg', title: 'Heavy Funk' },
    { src: './product6.svg', title: 'Genie' },
    { src: './product7.svg', title: 'Watermelon' },
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
          <div >
            <div className="lg:w-[800px] mt-[11rem] text-center lg:text-left ">
              <p className="md:text-[60px] text-[55px] leading-[60px] font-black flex justify-center">Categories</p>
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
        <div className="flex justify-center items-center mb-[25px] relative z-[1]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
            {images.map((image, index) => (
              <div className={`card rounded-xl overflow-hidden shadow-lg border sm:w-[350px] sm:h-[380px]  lg:w-[370px] lg:h-[400px]`}>
              <Card key={index} imageSrc={image.src} title={image.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
