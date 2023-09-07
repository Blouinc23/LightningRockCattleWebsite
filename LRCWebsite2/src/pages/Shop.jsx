import React, { useEffect, useState } from "react";
import ShopItem from "../components/shop/ShopItem";
import CowTrailLarge from "../assets/splashArt/CowTrailLarge.png";
import CowAngleFaded from "../assets/CowAngleFaded.png";
import cart from "../assets/splashArt/cart.png";

let subItems1 = [
  {
    title: "Full Cow",
    price: "1399",
    WeightRangeStart: "150",
    WeightRangeEnd: "200",
    Description: "This is a description of the product",
  },
  {
    title: "Half Cow",
    price: "899",
    WeightRangeStart: "100",
    WeightRangeEnd: "150",
    Description: "This is a description of the product",
  },
  {
    title: "Quarter Cow",
    price: "499",
    WeightRangeStart: "50",
    WeightRangeEnd: "100",
    Description: "This is a description of the product",
  },
];

let subItems2 = [
  {
    title: "Full Cow",
    price: "1399",
    WeightRangeStart: "150",
    WeightRangeEnd: "200",
    Description: "This is a description of the product",
  },
  {
    title: "Half Cow",
    price: "899",
    WeightRangeStart: "100",
    WeightRangeEnd: "150",
    Description: "This is a description of the product",
  },
  {
    title: "Quarter Cow",
    price: "499",
    WeightRangeStart: "50",
    WeightRangeEnd: "100",
    Description: "This is a description of the product",
  },
];

let subItems3 = [
  {
    title: "Full Cow",
    price: "1399",
    WeightRangeStart: "150",
    WeightRangeEnd: "200",
    Description: "This is a description of the product",
  },
  {
    title: "Half Cow",
    price: "899",
    WeightRangeStart: "100",
    WeightRangeEnd: "150",
    Description: "This is a description of the product",
  },
  {
    title: "Quarter Cow",
    price: "499",
    WeightRangeStart: "50",
    WeightRangeEnd: "100",
    Description: "This is a description of the product",
  },
];


const ShopItems = [
  {
    Name: "Product Name 1",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco.",
    Image: "https://via.placeholder.com/400",
  },
  {
    Name: "Product Name 2",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco.",
    Image: "https://via.placeholder.com/400",
  },
  {
    Name: "Product Name 3",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco.",
    Image: "https://via.placeholder.com/400",
  },
];
function Shop(props) {
  const [showViewCart,setShowViewCart]=useState(true)
  const [viewCartClasses,setViewCartClasses]=useState('translate-x-[17%]')
  const [cartIconClasses,setCartIconClasses]=useState('bg-greylite')

  function cartClickHandler(e){
    setShowViewCart(prevState => !prevState)
    if(!showViewCart){
      setViewCartClasses('translate-x-[17%]')
      setCartIconClasses('bg-greylite')
      return 
    }
    setViewCartClasses('translate-x-[80%]')
    setCartIconClasses('bg-transparent')

  }
  return (
    <>
    <div className={`z-[10] fixed right-0 top-[300px] flex items-center border-8 border-greylite pr-[50px] rounded-full ${viewCartClasses}  transition-all duration-200`}>
        <img src={cart} alt="cartIcon" className={`w-[50px] h-[50px] mr-[15px] rounded-full overflow-visible rounded-e-full p-2 ${cartIconClasses} hover:bg-greylite transition-all duration-500 cursor-pointer`} onClick={cartClickHandler}></img>
        <p className="text-blacklite text-[28px] hover:text-secondary cursor-pointer transition-all duration-200">View Order</p>
    </div>

      <div className="z-[0] flex flex-col items-center justify-center mb-[300px] mt-[20px] relative">
        <div className="absolute top-[75px] right-[250px] z-[-1]">
          <img src={CowTrailLarge} className="w-[35vw]"></img>
        </div>

        <h1 className="lg:text-[84px] text-[44px] text-center">
          From Our Farm to Your Table
        </h1>
        <h1 className="lg:text-[26px] text-[44px] text-center">
          Produce Boxes Perfectly Designed to fill your needs
        </h1>
        <div className="flex flex-col items-center mt-[75px] gap-[225px]">
          {ShopItems.map((shopItem) => (
            <ShopItem shopItem={shopItem} shopSubItems={subItems1}></ShopItem>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
