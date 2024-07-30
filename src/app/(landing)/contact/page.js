import Card from "@/app/components/Card";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('./Banner.png')`,
          height: "960px",
          width: "100%",
        }}
        className="bg-cover bg-center"
      >
        <div className="container mx-auto h-full w-full flex justify-center">
          <div className="lg:w-[800px] mt-[11rem] text-center lg:text-left justify-center flex ">
            <p className="text-[60px] leading-[60px] font-black">Categories</p>
          </div>
        </div>
      </div>
      <section className="most-recent pt-[160px] mt-[-450px] bg-transparent pb-16">
        <div className="flex   justify-center items-start mb-[25px] relative z-[1]">
          <form class="w-full container lg:w-[1180px] mb-14">
            <div class="flex flex-wrap -mx-3 mb-6 ">
              <div class="w-full  md:w-1/2 px-3 mb-6 md:mb-0 ">
                <input
                  class="appearance-none block w-full h-[70px]  text-gray-700 border  rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="First Name*"
                />
              </div>
              <div class="w-full  md:w-1/2 px-3">
                <input
                  class="appearance-none block w-full h-[70px] text-gray-700 border border-gray-200 rounded-full py-3 
      px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name*"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 ">
              <div class="w-full  md:w-1/2 px-3 mb-6 md:mb-0 ">
                <input
                  class="appearance-none block w-full  text-gray-700 border h-[70px] rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Email*"
                />
              </div>
              <div class="w-full  md:w-1/2 px-3">
                <input
                  class="appearance-none block w-full h-[70px] text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Phone Number*"
                />
              </div>
            </div>
            <div class="w-full   ">
              <textarea
                id="chat"
                class="appearance-none block w-full h-[70px] text-gray-700 border border-gray-200 rounded-full pt-6 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Message*"
              ></textarea>
            </div>

            <div className="flex justify-center pt-8">
              <button className=" rounded-full text-black uppercase bg-[#FFDA79] p-2 w-[209px] h-[60px] flex justify-center font-bold items-center gap-2 text-[16px]">
                Send Message{" "}
                <Image src="./arrow.svg" alt="arrow" height={15} width={15} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
