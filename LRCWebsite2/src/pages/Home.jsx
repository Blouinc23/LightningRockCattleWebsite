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
      <div className="mx-[130px] flex lg:flex-row flex-col justify-center items-center mt-[50px]">
        <img
          src={LRCLogo}
          className="lg:w-[900px] lg:h-fit h-[650px] lg:mr-[50px] my-[50px]"
          alt="LRC Logo"
        />
        <div className="flex flex-col lg:items-center lg:mt-14">
          <h1 className="lg:text-[104px] text-[78px] lg:self-start">
            Regenerative Meats
          </h1>
          <p className="text-[44px] leading-[4.5rem] lg:text-left text-center">
            Our cattle are raised and finished on our farm in Walterboro, SC. We
            use regenerative practices such as no-till planting, rotational
            grazing, and prescribed fires to convert a neglected forest into
            nutrient rich silvopasture.
          </p>
          <div className="mt-6 mb-10 self-center">
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
          className="lg:w-full lg:h-auto h-[400px] object-cover"
          alt="Cow Fade image"
        />
      </div>
      <div className="my-[100px]">
        <LogoScroller></LogoScroller>
      </div>

      <div>
        <ShopSection></ShopSection>
      </div>

      <div className="flex justify-center my-[100px]" id="GrazingImageSet">
        <div className="lg:w-[600px]">
          <ImageCard
            title={"Beef Boxes"}
            sub={"Try our whole, half, and quarter cow beef boxes!"}
            image={CowGrazing}
          ></ImageCard>
        </div>
        <div className="flex flex-col flex-shrink-0 lg:w-[1000px] mx-[50px]">
          <h1 className="text-[88px] text-blacklite">Grazing in the Shade</h1>
          <p className="leading-[4.5rem] text-blacklite">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
          </p>
          <div className="absolute w-[1000px]">
            <img src={CattlePrints} className=""></img>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[100px]" id="AboutImageSet">
        <div className="flex flex-col flex-shrink-0 lg:w-[1000px] mx-[50px]">
          <h1 className="text-blacklite text-[88px] text-right">Grazing in the Shade</h1>
          <p className="text-blacklite leading-[4.5rem] text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
          </p>
          <div className="absolute w-[500px]">
            <img src={SunSplashArt} className=""></img>
          </div>
        </div>
        <div className="lg:w-[550px]">
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
