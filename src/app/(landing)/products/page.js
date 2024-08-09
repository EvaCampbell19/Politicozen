"use client";
import Head from "next/head";
import Sidebar from "./Sidebar";
import Card from "@/app/components/Card";
import Image from "next/image";
import { useState } from "react";
import Custom from "@/app/components/CustomBanner";

const ITEMS_PER_PAGE = 10;

export default function Home() {
  const products = [
    { src: "./product8.svg", title: "post", price: "25.99" },
    { src: "./product8.svg", title: "post", price: "25.99" },
    { src: "./product8.svg", title: "post", price: "25.99" },
    { src: "./product8.svg", title: "post", price: "25.99" },
    { src: "./product8.svg", title: "post", price: "25.99" },
    { src: "./product8.svg", title: "post", price: "25.99" },
    { src: "./product8.svg", title: "Learn", price: "25.99" },
    { src: "./product8.svg", title: "teach", price: "25.99" },
    { src: "./product8.svg", title: "gym", price: "25.99" },
    { src: "./product7.svg", title: "blog", price: "32.99" },
    { src: "./product7.svg", title: "web", price: "32.99" },
    { src: "./product7.svg", title: "sceem", price: "32.99" },
    { src: "./product7.svg", title: "tax", price: "32.99" },

    // Add more products as needed
  ];
  const sidebarData = {
    productTypes: [
      "Mug",
      "Sweatshirt",
      "Shades",
      "T-shirt",
      "Canvas",
      "Poster",
    ],
    categories: ["Political", "Art", "Love", "Vex", "Misc", "Neo"],
    artists: [
      "Enghi Sekluk",
      "Samson Takul",
      "Winfred Hinkleman",
      "Jorge Sanchez Armza",
      "Ali Ghazooli",
    ],
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  // Calculate the start and end index for slicing the products array
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  console.log(startIndex,"startIndex")
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const searchfilter = products?.filter((val) =>
    val.title.toLocaleLowerCase().includes(search)
  );

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const filteredtotalPages = Math.ceil(searchfilter.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if(search == "") {

      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    } else {

      if (currentPage < filteredtotalPages) {
        setCurrentPage(currentPage + 1)
      }
    }
  };

  const handlePrev = () => { 
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


  const searchedProduct = searchfilter.slice(startIndex, endIndex);

  // console.log(searchfilter, "searchfilter");
  function handleChange(e) {
    setSearch(e.target.value);
    // console.log(search, "search");
  }
  function handleClick() {
    setSearch("")
  }

  return (
    <>
      <Custom onselect={handleClick} handleChange={handleChange} search={search} header="Products"/>
      <section className="most-recent pt-[160px] mt-[-450px] bg-transparent">
        <div className="acma0 flex mb-[25px] relative z-[1] mx-auto justify-center p-[10px] ml-[11rem]">
          <Sidebar data={sidebarData} />
          <div className="acma p-5 pl-[3rem] pt-0 grid gap-6 custom-scrollbar overflow-y-auto">
            {search == ""
              ? paginatedProducts?.map((product, index) => (
                  <div
                    key={index}
                    className={`card max-w-sm rounded-xl overflow-hidden shadow-lg border w-[270px] h-[390px]`}
                  >
                    <Card
                      imageSrc={product?.src}
                      title={product?.title}
                      price={product.price}
                    />
                  </div>
                ))
              : searchedProduct?.map((product, index) => (
                  <div
                    key={index}
                    className={`card max-w-sm rounded-xl overflow-hidden shadow-lg border w-[270px] h-[390px]`}
                  >
                    <Card
                      imageSrc={product?.src}
                      title={product?.title}
                      price={product.price}
                    />
                  </div>
                ))}
                {searchfilter == "" && 
                <div className="flex items-center mx-auto justify-center sx:mt-[-600px]">no product found</div>}
          </div>
        </div>
      </section>
      <section className="flex p-8">
        <div className=" xs:h-[45px] xs:p-[8px] container my-0 mx-auto p-14 h-[60px] justify-center flex items-center border-t-2 border-b-2">
          <div className="w-full bg-[#fdfdfd] flex justify-between border rounded-lg">
            <button
              className="text-[11px] w-[400px] p-2 bg-[#FFDA79] rounded-lg flex xl:w-[280px] m-1 xl:h-[48px] text-white items-center xl:p-4 gap-2 uppercase font-semibold"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              <Image
                src="./paginationArrow.svg"
                alt="arrow"
                height={10}
                width={18}
              />
              prev post
            </button>
            <button
              className="w-[280px] m-0 p-0 h-[56px] border-l border-r border-l-[#FFDA79] border-r-[#FFDA79]"
              disabled
            >
              {`${currentPage}/${search == "" ? totalPages : filteredtotalPages }`}
            </button>
            <button
              className="text-[11px] w-[400px] p-2 bg-[#FFDA79] justify-end rounded-lg flex xl:w-[280px] m-1 xl:h-[48px] text-white items-center xl:p-4 gap-2 uppercase font-semibold"
              onClick={handleNext}
              disabled={currentPage === (search == "" ? totalPages : filteredtotalPages) }
            >
              next post
              <Image
                src="./paginationArrow.svg"
                alt="arrow"
                className="rotate-180"
                height={10}
                width={18}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
