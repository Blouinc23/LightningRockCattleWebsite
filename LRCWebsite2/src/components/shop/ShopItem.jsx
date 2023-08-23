import React, { useEffect } from "react";
import ShopSubItem from "./ShopSubItem";

function ShopItem({shopSubItems,shopItem}) {
  
  return (
    <div className="flex bg-brownlite p-5 rounded-xl relative text-blacklite">
      <div className="rounded-xl overflow-hidden">
        <img src={shopItem.Image} alt="placeholder"></img>
      </div>
      <div className="flex flex-col mx-[50px] mt-[20px] min-w-[400px] max-w-[800px]">
        <h1 className="text-center text-[44px] font-semibold">{shopItem.Name}</h1>
        <p className="text-[30px]">
          {shopItem.Description}
        </p>
        <div className="flex flex-row gap-[25px] absolute bottom-[-150px] mr-[25px]">
        {shopSubItems.map((shopSubItem) => (
          <ShopSubItem Title={shopSubItem.title} Price={shopSubItem.price} WeightRangeStart={shopSubItem.WeightRangeStart} WeightRangeEnd={shopSubItem.WeightRangeEnd} MoreInfo={shopSubItem.Description}></ShopSubItem>
        ))}
        </div>

      </div>
    </div>
  );
}

export default ShopItem;
