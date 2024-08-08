import React from "react";
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Custom = ({ onselect, handleChange, search, header }) => {
  return (
    <div
      style={{
        backgroundImage: `url('./Banner.png')`,
        height: "960px",
        width: "100%",
      }}
      className="bg-cover bg-center"
    >
      <div className="container mx-auto h-full w-full flex justify-center">
        <div>
          <div className="lg:w-[800px] mt-[11rem] text-center lg:text-left">
            <p className="title text-[60px] leading-[60px] font-black flex justify-center ">
              {header && header}
            </p>
          </div>
          {search ? (
            <div className="mt-[25px]">
              <form>
                <div className="relative">
                  <input
                    className={`p-5 w-full rounded-lg cust_class pr-12`} // Add padding-right for space for icon
                    type="text"
                    name="search"
                    placeholder="Search all artist of products"
                    value={search}
                    onChange={handleChange && handleChange}
                  />
                  {search !== "" && (
                    <div
                      onClick={onselect && onselect}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Custom;
