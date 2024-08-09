"use client";
import Card from "@/app/components/Card";
import Custom from "@/app/components/CustomBanner";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const artists = [
    { title: "Adrian Pati Franco" },
    { title: "Konstantinos Tsanakas" },
    { title: "Earth & Soccer" },
    { title: "Practice" },
    { title: "Heavy Funk" },
    { title: "Ehsan Iranshahi" },
    { title: "Mozhdeh Malekohgli" },
    { title: "Earth & Soccer" },
    { title: "Practice" },
    { title: "Heavy Funk" },
    { title: "Ehsan Iranshahi" },
    { title: "Mozhdeh Malekohgli" },
    { title: "Earth & Soccer" },
    { title: "Practice" },
    { title: "Heavy Funk" },
    { title: "Ehsan Iranshahi" },
    { title: "Mozhdeh Malekohgli" },
  ];

  const [search, setSearch] = useState("");

  const searchfilter = artists?.filter((val) =>
    val.title.toLocaleLowerCase().includes(search)
  );
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
      <Custom onselect={handleClick} handleChange={handleChange} search={search} header="Artists"/>
      <section className="most-recent pt-[160px] mt-[-450px] bg-transparent">
        <div className="res0 flex justify-center flex-wrap items-start pb-[25px] relative z-[1] ml-[11rem]">
          <div className="res1 lg:grid-cols-3 grid gap-6 pb-16">
            {search == ""
              ? artists.map((artist, index) => (
                  <div className=" lg:w-[310px] lg:h-[60px] drop-shadow-sm ">
                    <button className="res3 rounded-full border border-[#DDDDDD]  w-[16rem] h-full ">
                      <div className="justify-start flex items-center px-4 gap-4">
                        <Image src="./checkMark.svg" width={20} height={20} />{" "}
                        <span className="text-[#868686] font-medium text-base">
                          {artist.title}
                        </span>
                      </div>
                    </button>
                    {/* <Card key={index} imageSrc={image.src} title={image.title} /> */}
                  </div>
                ))
              : searchfilter.map((val) => (
                  <div className=" lg:w-[310px] lg:h-[60px] drop-shadow-sm ">
                    <button className="res3 rounded-full border border-[#DDDDDD]  w-[16rem] h-full ">
                      <div className="justify-start flex items-center px-4 gap-4">
                        <Image src="./checkMark.svg" width={20} height={20} />{" "}
                        <span className="text-[#868686] font-medium text-base">
                          {val.title}
                        </span>
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
