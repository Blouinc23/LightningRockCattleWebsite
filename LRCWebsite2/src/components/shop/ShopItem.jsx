import React from "react";
import ShopSubItem from "./ShopSubItem";

function ShopItem(props) {
  return (
    <div className="flex bg-brownlite p-5 rounded-xl relative text-blacklite">
      <div className="rounded-xl overflow-hidden">
        <img src="https://via.placeholder.com/400" alt="placeholder"></img>
      </div>
      <div className="flex flex-col mx-[50px] mt-[20px] min-w-[400px] max-w-[800px]">
        <h1 className="text-center text-[44px] font-semibold">Product Name</h1>
        <p className="text-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div className="flex flex-row gap-[25px] absolute bottom-[-150px] mr-[25px]">
        <ShopSubItem Title='Full Cow' Price='1399' WeightRangeStart='150' WeightRangeEnd='200'></ShopSubItem>
        <ShopSubItem Title='Full Cow' Price='1399' WeightRangeStart='150' WeightRangeEnd='200'></ShopSubItem>
        <ShopSubItem Title='Full Cow' Price='1399' WeightRangeStart='150' WeightRangeEnd='200'></ShopSubItem>
        </div>

      </div>
    </div>
  );
}

export default ShopItem;
