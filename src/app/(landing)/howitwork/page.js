import Custom from "@/app/components/CustomBanner";
import React from "react";
const data = [
  {
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    title: "Team Work",
    num: "1",
  },
  {
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    title: "Open & honest",
    num: "2",
  },
  {
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    title: "We love our users",
    num: "3",
  },
];

const page = () => {
  return (
    <>
   <Custom header="How It Work"/>

      <section className="most-recent pt-[160px] mt-[-450px] bg-transparent">
        <div className="ruby0 flex justify-center items-center mb-[25px] relative z-[1] ml-[11rem] flex-wrap mx-auto">
          <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
            <div className="text-center">
              <h2 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                How it <span className="text-[#FFDA79]">Works?</span>
              </h2>
            </div>

            <div className="mt-20">
              <ul>
                {data?.map((val) => (
                  <li
                    key={val.num}
                    className="bg-gray-100 p-5 pb-10 text-center mb-20"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex-shrink-0 relative top-0 -mt-16">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#FFDA79] text-white border-4 border-white text-xl font-semibold">
                          {val.num}
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-lg leading-6 font-semibold text-gray-900">
                          {val.title}
                        </h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          {val.content}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
