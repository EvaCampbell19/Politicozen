// pages/index.js
import Head from 'next/head';
import Sidebar from './Sidebar';
import Card from '@/app/components/Card';

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
      <section className="flex most-recent pt-[160px] mt-[-450px] bg-transparent">
      <div className="flex  mb-[25px] relative z-[1] my-0 mx-auto">
      <Sidebar  data={sidebarData}/>
      <div className="flex-1 p-4  pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {products.map((product, index) => (
            <div className={`card max-w-sm rounded-xl overflow-hidden shadow-lg border w-[270px] h-[390px]`}>
            <Card key={index} imageSrc={product?.src} title={product?.title} price={product.price}/>
           </div>
    
        ))}
      </div>

      </div>
      </section>
    
    </>
  );
}
