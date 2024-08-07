"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useEffect, useState } from "react";
import Custom from "@/app/components/CustomBanner";

const page = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  });

  useEffect(() => {
    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");
    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    if (instanceRef.current) {
      keenSliderPrevious?.addEventListener("click", () =>
        instanceRef.current.prev()
      );
      keenSliderNext?.addEventListener("click", () =>
        instanceRef.current.next()
      );
      keenSliderPreviousDesktop?.addEventListener("click", () =>
        instanceRef.current.prev()
      );
      keenSliderNextDesktop?.addEventListener("click", () =>
        instanceRef.current.next()
      );
    }

    // Clean up event listeners on component unmount
    return () => {
      keenSliderPrevious?.removeEventListener("click", () =>
        instanceRef.current.prev()
      );
      keenSliderNext?.removeEventListener("click", () =>
        instanceRef.current.next()
      );
      keenSliderPreviousDesktop?.removeEventListener("click", () =>
        instanceRef.current.prev()
      );
      keenSliderNextDesktop?.removeEventListener("click", () =>
        instanceRef.current.next()
      );
    };
  }, [instanceRef]);

  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    // console.log(search, "search");
  }

  function handleClick() {
    setSearch("");
  }

  return (
    <>
      <Custom
        onselect={handleClick}
        handleChange={handleChange}
        search={search}
        header="About us"
      />
      <section className="most-recent pt-[160px] mt-[-450px] bg-transparent">
        <div className="ruby0 flex flex-col justify-center items-center mb-[25px] relative z-[1] ml-[11rem] flex-wrap mx-auto">
          <div class="flex flex-wrap items-center mx-auto mb-[5rem]">
            <div class="w-full px-4 lg:w-1/2">
              <div class="mb-12 lg:max-w-[540px]  sm:w-full lg:mb-0">
                <h2 class="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Brilliant Toolkit to Build Nextgen Website Faster.
                </h2>
                <p class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
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
                <button className="inline-flex items-center bg-[#ffda79] justify-center py-3 text-base font-medium text-center text-black border rounded-md border-primary bg-primary px-7 hover:border-blue-dark">
                  Contact Us
                </button>
              </div>
            </div>

            <div class="w-full px-4 lg:w-1/2">
              <div class="flex flex-wrap ">
                <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div class="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <img
                      src="./about-image-01.jpg"
                      alt="about image"
                      class="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>

                <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div class="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <img
                      src="./about-image-02.jpg"
                      alt="about image"
                      class="object-cover object-center w-full h-full"
                    />
                  </div>

                  <div
                    // style={{backgroundImage: `url('./Banner.png')`}}
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
                      <span class="block text-base font-medium text-black text-opacity-70">
                        Years of experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="">
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                <div className="max-w-xl text-center sm:text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Don't just take our word for it...
                  </h2>
                  <p className="mt-4 text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit...
                  </p>
                  <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                    <button
                      aria-label="Previous slide"
                      id="keen-slider-previous-desktop"
                      className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                      <svg
                        class="size-5 -rotate-180 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                    <button
                      aria-label="Next slide"
                      id="keen-slider-next-desktop"
                      className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-2 lg:mx-0">
                  <div ref={sliderRef} className="keen-slider">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="keen-slider__slide relative bg-[url('https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/Shadow%20Grey%20Denim%20Oversized%20Cargo%20Pants_21_07_2024_700x933.jpg')]"
                      >
                        {/* <img
                          src="https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/Shadow%20Grey%20Denim%20Oversized%20Cargo%20Pants_21_07_2024_700x933.jpg"
                          alt="img"
                          className="w-full h-full object-cover"
                        /> */}
                        <blockquote className="flex flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12">
                          <div>
                            <div className="flex gap-0.5 text-green-500">
                              {[...Array(5)].map((_, j) => (
                                <svg
                                  key={j}
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <div className="mt-4">
                              <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                                NETPLAY
                              </p>
                              <p className="mt-4 leading-relaxed text-gray-700">
                                Men Patterned Regular Fit Shirt with Patch
                                Pocket
                              </p>
                            </div>
                          </div>
                          <button className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            <b>ADD TO BAG</b>
                          </button>
                        </blockquote>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between mt-4 lg:hidden">
                    <button
                      aria-label="Previous slide"
                      id="keen-slider-previous"
                      className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                      <svg
                        class="size-5 -rotate-180 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                    <button
                      aria-label="Next slide"
                      id="keen-slider-next"
                      className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default page;
