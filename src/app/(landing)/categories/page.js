"use client";
import Card from "@/app/components/Card";
import Custom from "@/app/components/CustomBanner";
import React, { useState } from "react";

export default function Page() {
  const images = [
    { src: "./product1.svg", title: "Leash" },
    { src: "./product2.svg", title: "Mental Health" },
    { src: "./product3.svg", title: "Earth & Soccer" },
    { src: "./product4.svg", title: "Practice" },
    { src: "./product5.svg", title: "Heavy Funk" },
    { src: "./product6.svg", title: "Genie" },
    { src: "./product7.svg", title: "Watermelon" },
  ];

  const [search, setSearch] = useState("");

  const searchfilter = images?.filter((val) =>
    val.title.toLocaleLowerCase().includes(search.toLowerCase())
  );
  console.log(searchfilter, "searchfilter");
  function handleChange(e) {
    setSearch(e.target.value);
    // console.log(search, "search");
  }

  function handleClick() {
    setSearch("")
  }

  return (
    <>
     <Custom onselect={handleClick} handleChange={handleChange} search={search} header="Categories"/>
      <section className="most-recent pt-[160px] mt-[-450px] bg-transparent">
        <div className="ruby0 flex justify-center items-center mb-[25px] relative z-[1] ml-[11rem] flex-wrap mx-auto">
          <div className="ruby grid gap-6 pb-16">
            {search == ""
              ? images.map((image, index) => (
                  <div
                    className={`card rounded-xl overflow-hidden shadow-lg border sm:w-[350px] sm:h-[380px]  lg:w-[370px] lg:h-[400px]`}
                  >
                    <Card
                      key={index}
                      imageSrc={image.src}
                      title={image.title}
                    />
                  </div>
                ))
              : searchfilter.map((image, index) => (
                  <div
                    className={`card rounded-xl overflow-hidden shadow-lg border sm:w-[350px] sm:h-[380px]  lg:w-[370px] lg:h-[400px]`}
                  >
                    <Card
                      key={index}
                      imageSrc={image.src}
                      title={image.title}
                    />
                  </div>
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
