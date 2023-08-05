import React, { useState, useEffect } from "react";
import CalendarIcon from "../../assets/splashArt/CalendarIcon.png";
import TruckIcon from "../../assets/splashArt/TruckIcon.png";
import DownArrow from "../../assets/splashArt/DownArrow.png";

function ShopSubItem({
  Title,
  Price,
  WeightRangeStart,
  WeightRangeEnd,
  Delivery,
  PickupDate,
  MoreInfo,
}) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showMoreInfoClass, setShowMoreInfoClass] = useState('translate-y-[0px]');
  const [arrowRotateClass, setArrowRotateClass]= useState('rotate-[0deg]');

  function infoClickHandler() {
    console.log("clicked");
    setShowMoreInfo(prevState => !prevState);
  }

  useEffect(() => {
    console.log(showMoreInfo);
    if (showMoreInfo) {
        setShowMoreInfoClass('translate-y-[-150px]');
        setArrowRotateClass('rotate-[180deg]');
    } else {
        setShowMoreInfoClass('translate-y-[0]');
        setArrowRotateClass('rotate-[0deg]');
    }}, [showMoreInfo]);

  return (
    <div className="bg-greenlite min-w-[200px] max-h-[260px] p-3 rounded-xl overflow-hidden">
        <div className={`flex flex-col transition-all duration-200 ${showMoreInfoClass}`} id='animatedSection'>
      <h1 className="text-[34px] font-semibold">{Title}</h1>
      <p className="text-[24px] mt-[-10px]">
        ${Price}{" "}
        <span className="opacity-50">
          {" "}
          {`/ ${WeightRangeStart}lb-${WeightRangeEnd}lb`}
        </span>
      </p>
      <div className="flex gap-[10px]">
        <img
          src={TruckIcon}
          className="w-[25px] self-center"
          alt="CalendarIcon"
        ></img>
        <p className="text-[20px] text-left opacity-75">
          {Delivery ? "Delivery Available" : "Delivery Not Available"}
        </p>
      </div>
      <div className="flex gap-[10px]">
        <img
          src={CalendarIcon}
          className="w-[25px] self-center"
          alt="CalendarIcon"
        ></img>
        <p className="text-[20px] text-left opacity-75">
          Pickup Date: 6/15/2023
        </p>
      </div>
      <button className="bg-secondary text-blacklite text-[24px] rounded-xl py-4 px-8 mt-[10px] hover:bg-opacity-60 transition-all duration-200">
        Add to Order
      </button>

      <div className="flex justify-center items-center gap-[10px]  opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer" onClick={infoClickHandler}>
        <img src={DownArrow} className={`w-[15px] h-[15px] transition-all duration-200 ${arrowRotateClass}`}></img>
        <p
          className="text-[18px] text-center underline "
          
        >
          More Info
        </p>
        <img src={DownArrow} className={`w-[15px] h-[15px] transition-all duration-200 ${arrowRotateClass}`}></img>
      </div>

      <div>
        <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
     
      </div>
    </div>
  );
}

export default ShopSubItem;
