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
              className="lg:text-[32px] md:text-[32px] text-[16px] text-blacklite"
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

      <div className="flex lg:flex-row flex-col items-center justify-center lg:my-[150px] my-[200px]" id="GrazingImageSet">
        <div className="lg:w-[600px] w-[90vw]">
          <ImageCard
            title={"Beef Boxes"}
            sub={"Try our whole, half, and quarter cow beef boxes!"}
            image={CowGrazing}
          ></ImageCard>
        </div>
        <div className="flex flex-col flex-shrink-0 lg:w-[1000px] mx-[50px] relative">
          <h1 className="lg:text-[64px] text-[48px] text-blacklite lg:text-center text-center">Pasture Raised. Pasture Finished. Flavored by Nature.</h1>
          <p className="text-blacklite lg:leading-[4.5rem] leading-[3rem] lg:text-left text-left lg:text-[34px] text-[20px] mb-[20px]">
          Our cattle are raised and finished on our farm in Walterboro, SC. We use regenerative
practices such as no-till planting, rotational grazing, and prescribed fire to convert a neglected
forest into silvopasture. Our cattle graze in the shade of the loblolly pines. We never use hormones or antibiotics on our cattle or herbicides or fertilizers in our pastures. Taste the difference nature can make.

          </p>
          <div className="absolute top-[50px] lg:w-[1000px]">
            <img src={CattlePrints} className=""></img>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-center my-[100px]" id="AboutImageSet">
        <div className="flex flex-col flex-shrink-0 lg:w-[1000px] mx-[50px] relative">
          <h1 className="lg:text-[64px] text-[48px] text-blacklite lg:text-left text-center">About the Wrights</h1>
          <p className="text-blacklite lg:leading-[4.5rem] leading-[1rem] lg:text-left text-left lg:text-[34px] text-[20px] mb-[20px]">
          Trey is a 4th generation cattleman from northern California and Corrine is a 1st generation farmer from eastern Massachusetts. Trey served in the Navy for 8 years on the MH-53 helicopter before going back to school for Fire Science and becoming a Fire Fighter. Corrine has been in the Coast Guard for ten years as a naval engineer and project manager. They met while both on active duty in Norfolk, Virginia and the rest is history!
Settling in Charleston, South Carolina, Trey and Corrine found a piece of property that would allow their dreams to come alive. The couple has worked to fence, plant, burn, and graze the farm. It’s unrecognizable from the overgrown landscape they took a chance on in 2020.
Today, Trey, Corrine, and their two daughters raise South Poll and Pineywoods cattle for beef, chickens for meat, ducks for both eggs and meat, and bees for honey. Trey is a Firefighter in Charleston and Corrine still serves on active duty in the Coast Guard.

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
