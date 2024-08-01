// pages/index.js
import Head from 'next/head';
import Sidebar from './Sidebar';
import Card from '@/app/components/Card';
import Image from 'next/image';

export default function Home() {
  const products = [
    { src: './product8.svg', title: 'Learn', price: '25.99' },
    { src: './product7.svg', title: 'Learn', price: '32.99' },
    { src: './product7.svg', title: 'Learn', price: '32.99' },
    { src: './product7.svg', title: 'Learn', price: '32.99' },
    { src: './product7.svg', title: 'Learn', price: '32.99' },

    // Add more products as needed
  ];
  const sidebarData = {
    productTypes: ["Mug", "Sweatshirt", "Shades", "T-shirt", "Canvas", "Poster"],
    categories: ["Political", "Art", "Love", "Vex", "Misc", "Neo"],
    artists: ["Enghi Sekluk", "Samson Takul", "Winfred Hinkleman", "Jorge Sanchez Armza", "Ali Ghazooli"]
  };
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
          <p className="text-[60px] leading-[60px] font-black flex justify-center ">Products</p>
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
      <div className="acma0 flex mb-[25px] relative z-[1] mx-auto justify-center p-[10px] ml-[11rem]">
      <Sidebar  data={sidebarData}/>
      <div className="acma p-5 pl-[3rem] pt-0 grid gap-6  ">
        {products.map((product, index) => (
            <div className={`card max-w-sm rounded-xl overflow-hidden shadow-lg border w-[270px] h-[390px]`}>
            <Card key={index} imageSrc={product?.src} title={product?.title} price={product.price}/>
           </div>
    
        ))}
      </div>
    
      </div>
    
      </section>
      <section  className="flex p-8">
      <div className='container  my-0 mx-auto p-14  h-[60px] justify-center flex items-center  border-t-2 border-b-2'>
        <div className='w-full bg-[#fdfdfd] flex justify-between border rounded-lg'>
        <button className='bg-[#FFDA79] rounded-lg flex w-[280px] m-1 h-[48px] text-white items-center p-4 gap-2 uppercase font-semibold'> <Image src="./paginationArrow.svg" alt="arrow"  height={10} width={18} /> prev post</button>
        <button className='w-[280px] m-0 p-0 h-[56px] border-l border-r border-l-[#FFDA79] border-r-[#FFDA79]'>02/08</button>
        <button className='bg-[#FFDA79] justify-end  rounded-lg flex w-[280px] m-1 h-[48px] text-white items-center p-4 gap-2 uppercase font-semibold'>next post <Image src="./paginationArrow.svg" alt="arrow" className='rotate-180' height={10} width={18} /></button>
</div>
      </div>
      </section>
     
    
    </>
  );
}
