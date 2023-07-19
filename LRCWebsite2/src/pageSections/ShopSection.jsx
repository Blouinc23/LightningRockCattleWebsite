import React from "react";
import ImageCard from "../components/ImageCard";
import ChickenBox from "../assets/boxImages/ChickenBox.png";
import BeefBox from "../assets/boxImages/BeefBox.png";
import SpecialBox from "../assets/boxImages/SpecialBox.png";
import Button from "../components/Button";

function ShopSection(props) {
  return (
    <div className="bg-primary w-full h-auto flex flex-col items-center mb-[100px]">
      <h1 className="text-white lg:text-[64px] text-[44px] text-center lg:leading-[7rem] mb-[25px]">
        From Our Farm <br /> To Your Table
      </h1>
      <div className="flex mb-4 lg:h-auto lg:gap-[150px] w-[90vw] gap-[5vw] mx-[100px] flex-wrap">
        <div className="flex flex-col lg:flex-1 mb-[25px]">
          <ImageCard title={'Beef Boxes'} sub={'Try our whole, half, and quarter cow beef boxes!'} image={BeefBox}></ImageCard>
          <h2 className="text-white lg:text-[48px] text-[28px]">Beef Box</h2>
          <p1 className="text-white opacity-70 lg:text-[30px] text-[14px]">
            Next Pickup Date: 6/26/23
          </p1>
        </div>
        <div className="flex flex-col flex-1">
          <ImageCard title={'Chicken Boxes'} sub={'Try our whole, half, and quarter cow beef boxes!'} image={ChickenBox}></ImageCard>
          <h2 className="text-white lg:text-[48px] text-[28px]">Beef Box</h2>
          <p1 className="text-white opacity-70 lg:text-[30px] text-[14px]">
            Next Pickup Date: 6/26/23
          </p1>
        </div>
        <div className="flex flex-col flex-1">
          <ImageCard title={'Special Boxes'} sub={'Try our whole, half, and quarter cow beef boxes!'} image={SpecialBox}></ImageCard>
          <h2 className="text-white lg:text-[48px] text-[28px]">Beef Box</h2>
          <p1 className="text-white opacity-70 lg:text-[30px] text-[14px]">
            Next Pickup Date: 6/26/23
          </p1>
        </div>
      </div>
      <div className="self-center my-[50px] mb-[100px]">
        {" "}
        <Button className='lg:text-[32px] md:text-[32px] text-[16px] text-blacklite' text={"Shop All Products"} link="/shop"></Button>{" "}
      </div>
    </div>
  );
}

export default ShopSection;
