import React from "react";
import Button from "./Button";

function ImageCard({image, imgClassName, title, sub}) {
  return (
    <>
      <div className="relative flex w-full overflow-hidden h-[100%] bg-primary z-10 rounded-[18px] group cursor-pointer">

          <img
            className={`rounded-[12px] object-cover flex-1 bg-primary z-0 group-hover:opacity-25 transition-opacity duration-200 ${imgClassName}`}
            src={image}
          ></img>

        <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-500 p-3 z-10 text-center w-full absolute text-white lg:text-[23px] text-[20px] font-bold top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[100%] group-hover:translate-y-[-50%]">
          {title}
          <p className="mx-3 font-normal lg:text-[24px] text-[14px] text-center z-[-1] ">
            {sub}
          </p>
        </h1>
      </div>
    </>
  );
}

export default ImageCard;
