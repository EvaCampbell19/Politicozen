import React from 'react';
import Image from 'next/image';

const page = () => {
  const products = [
    { id: 1, name: 'Learn', image: '/product_2.png' },
    { id: 2, name: 'Gadget', image: '/product_3.png' },
    { id: 3, name: 'Cry', image: '/product_4.png' },
    { id: 4, name: 'Death & Life', image: '/product_5.png' },
  ];
  return (
    <section className='py-[160px]  px-0'>
      <div className='flex justify-center item-center '>
        <div className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        <div className="relative  h-80 md:h-[570px] lg:w-[500px] ">
        <Image
              src="/product_1.png"
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-4 lg:w-[450px] p-[1rem]">
            <h1 className="text-3xl font-semibold">Death of Nature</h1>
            <p className="text-[16px] text-black font-medium">
              by <b>Yalda Hasheminiazhad</b>
            </p>
            <div className="border-b ">
              <p className="text-5xl pb-4 text-[#FFDA79] font-bold">$25.99</p>
            </div>
            <div className="selectsize flex justify-between gap-3 md:flex-col lg:flex-row">
              <div className="flex flex-col w-auto gap-2">
                <p className="font-semibold text-lg ">Selected Size</p>
                <div className="flex space-x-2 rounded-3xl gap-2 w-full font-semibold">
                  <button className="rounded-full py-2  px-4 bg-[#FFDA79] text-base w-[112px] h-[50px]">
                    17x25.5"
                  </button>
                  <button className="rounded-full py-2  px-4 border text-base  w-[112px] h-[50px] font-medium text-[#636363] border-[#636363]">
                    24x36"
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <p className="font-semibold text-lg ">Select</p>
                <div className="flex space-x-2 gap-2">
                  <button className="rounded-full p-4 bg-[#FFDA79] text-base font-semibold">
                    Poster
                  </button>
                  <button className="rounded-full text-base text-[#636363] p-4 border font-medium border-[#636363]">
                    Canvas
                  </button>
                </div>
              </div>
            </div>
            <div className="my-[25px] bg-[#DDDDDD] h-[1px]" />

            <button className="mt-6 bg-[#FFDA79] text-[#000000] font-semibold p-4 rounded-full w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[160px]">
        <div className="flex justify-center items-center mb-[25px] relative z-[1] flex-col">
          <div className="flex mb-[25px]">
            <p className="prtext font-bold text-[60px]">Products </p>
            <h2 className="prtext text-[#FFDA79] font-bold text-[60px] pl-2">
              Relation
            </h2>
          </div>
          <div className="prcard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-[1rem]">
            {products.map((product) => (
              <>
                <div className="border p-8 rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={192}
                    height={220}
                    className="h-[220px]"
                  />
                  <div className="h-[1px] bg-[#DCDCDC] my-[25px]"></div>
                  <h3 className="mt-2 text-[#868686] text-center">
                    {product.name}
                  </h3>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
