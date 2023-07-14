import React from "react";
import ImageCard from "../components/ImageCard";
import ChickenBox from "../assets/boxImages/ChickenBox.png";
import BeefBox from "../assets/boxImages/BeefBox.png";
import SpecialBox from "../assets/boxImages/SpecialBox.png";
import Button from "../components/Button";

function ShopSection(props) {
  return (
    <div className="bg-primary w-full h-[1100px] flex flex-col">
      <h1 className="text-white text-[88px] text-center leading-[7rem] my-[50px]">
        From Our Farm <br /> To Your Table
      </h1>
      <div className="flex mb-4 h-[650px] gap-[150px] mx-[100px]">
        <div className="flex flex-col flex-1 mb-[25px]">
          <ImageCard title={'Beef Boxes'} sub={'Try our whole, half, and quarter cow beef boxes!'} image={BeefBox}></ImageCard>
          <h2 className="text-white text-[48px]">Beef Box</h2>
          <p1 className="text-white opacity-70 text-[30px]">
            Next Pickup Date: 6/26/23
          </p1>
        </div>
        <div className="flex flex-col flex-1">
          <ImageCard title={'Chicken Boxes'} sub={'Try our whole, half, and quarter cow beef boxes!'} image={ChickenBox}></ImageCard>
          <h2 className="text-white text-[48px]">Beef Box</h2>
          <p1 className="text-white opacity-70 text-[30px]">
            Next Pickup Date: 6/26/23
          </p1>
        </div>
        <div className="flex flex-col flex-1">
          <ImageCard title={'Special Boxes'} sub={'Try our whole, half, and quarter cow beef boxes!'} image={SpecialBox}></ImageCard>
          <h2 className="text-white text-[48px]">Beef Box</h2>
          <p1 className="text-white opacity-70 text-[30px]">
            Next Pickup Date: 6/26/23
          </p1>
        </div>
      </div>
      <div className="self-center my-[50px]">
        {" "}
        <Button className='text-[32px] text-blacklite' text={"Shop All Products"} link="/shop"></Button>{" "}
      </div>
    </div>
  );
}

export default ShopSection;
