import React from "react";
import LRCLogo from "../assets/LRCLogo.png";
import FadedCows from "../assets/FadedCows.png";
import Button from "../components/Button";
import LogoScroller from "../components/LogoScroller";
import ShopSection from "../pageSections/ShopSection";
import ImageCard from "../components/ImageCard";
import CowGrazing from "../assets/CowGrazing.png";
import CattlePrints from "../assets/splashArt/CattlePrints.png";
import SunSplashArt from "../assets/splashArt/SunSplashArt.png";
import FamilyPhoto from "../assets/FamilyPhoto.png";
import TimelineSection from "../pageSections/TimelineSection";

function Home(props) {
  return (
    <>
      <div className="lg:mx-[130px] mx-[10px] flex lg:flex-row flex-col justify-center items-center mt-[50px]">
        <img
          src={LRCLogo}
          className="lg:w-[700px] lg:h-fit w-[80vw] lg:mr-[50px] my-[20px]"
          alt="LRC Logo"
        />
        <div className="flex flex-col lg:items-center lg:mt-14">
          <h1 className="lg:text-[84px] text-[44px] text-center lg:text-left lg:self-start">
            Regenerative Meats
          </h1>
          <p className="lg:text-[34px] text-[22px] lg:leading-[4.5rem] leading-[3rem] lg:text-left text-center">
            Our cattle are raised and finished on our farm in Walterboro, SC. We
            use regenerative practices such as no-till planting, rotational
            grazing, and prescribed fires to convert a neglected forest into
            nutrient rich silvopasture.
          </p>
          <div className="mt-6 self-center">
            <Button
              className="text-[32px] text-blacklite"
              text="Learn More"
            ></Button>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src={FadedCows}
          className="lg:w-full lg:h-auto h-[400px] lg:mt-auo mt-[40px] object-cover"
          alt="Cow Fade image"
        />
      </div>
      <div className="my-[100px]">
        <LogoScroller></LogoScroller>
      </div>

      <div>
        <ShopSection></ShopSection>
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-center lg:my-[100px] my-[200px]" id="GrazingImageSet">
        <div className="lg:w-[600px] w-[90vw]">
          <ImageCard
            title={"Beef Boxes"}
            sub={"Try our whole, half, and quarter cow beef boxes!"}
            image={CowGrazing}
          ></ImageCard>
        </div>
        <div className="flex flex-col flex-shrink-0 lg:w-[1000px] mx-[50px] relative">
          <h1 className="lg:text-[64px] text-[48px] text-blacklite lg:text-left text-center">Grazing in the Shade</h1>
          <p className="text-blacklite lg:leading-[4.5rem] leading-[3rem] lg:text-right text-left lg:text-[34px] text-[20px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
          </p>
          <div className="absolute top-[50px] lg:w-[1000px]">
            <img src={CattlePrints} className=""></img>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-center my-[100px]" id="AboutImageSet">
        <div className="flex flex-col flex-shrink-0 lg:w-[1000px] mx-[50px] relative">
          <h1 className="lg:text-[64px] text-[48px] text-blacklite lg:text-left text-center">About the Wright's</h1>
          <p className="text-blacklite lg:leading-[4.5rem] leading-[3rem] lg:text-right text-left lg:text-[34px] text-[20px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
          </p>
          <div className="absolute lg:w-[500px] w-[90vw]">
            <img src={SunSplashArt} className=""></img>
          </div>
        </div>
        <div className="lg:w-[550px] w-[90vw]">
          <ImageCard
            title={"Beef Boxes"}
            sub={"Try our whole, half, and quarter cow beef boxes!"}
            image={FamilyPhoto}
          ></ImageCard>
        </div>
      </div>

      <div>
        <TimelineSection></TimelineSection>
      </div>
    </>
  );
}

export default Home;
