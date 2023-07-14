import React from "react";
import ATFSystem from "../assets/ATFSystem.png";
import CSCGrown from "../assets/CSCGrown.png";
import HBHeroes from "../assets/HBHeroes.png";

function LogoScroller(props) {
  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <div className="inline-block">
        <div className="animate-moveRight flex justify-center gap-[90px] whitespace-nowrap mx-[45px]">
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="my-2 h-[200px]"
              src={ATFSystem}
              alt="ATF System Logo"
            />
            <p className="text-[20px]"> American Tree Farm System</p>
          </div>
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center flex-shrink-0">
            <img
              className="my-2 h-[200px] w-[220px]"
              src={CSCGrown}
              alt="CSCGrown Logo"
            />
            <p className="text-[20px]"> Certified SC Grown</p>
          </div>
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="my-2 h-[200px]"
              src={HBHeroes}
              alt="HBH Logo"
            />
            <p className="text-[20px]"> Homegrown By Heroes</p>
          </div>
        </div>
      </div>

      <div className="inline-block">
        <div className="animate-moveRight flex justify-center gap-[90px] whitespace-nowrap mx-[45px]">
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="my-2 h-[200px]"
              src={ATFSystem}
              alt="ATF System Logo"
            />
            <p className="text-[20px]"> American Tree Farm System</p>
          </div>
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center flex-shrink-0">
            <img
              className="my-2 h-[200px]  w-[220px]"
              src={CSCGrown}
              alt="CSCGrown Logo"
            />
            <p className="text-[20px]"> Certified SC Grown</p>
          </div>
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="my-2 h-[200px]"
              src={HBHeroes}
              alt="HBH Logo"
            />
            <p className="text-[20px]"> Homegrown By Heroes</p>
          </div>
        </div>
      </div>
      
      <div className="inline-block">
        <div className="animate-moveRight flex justify-center gap-[90px] whitespace-nowrap mx-[45px]">
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="my-2 h-[200px]"
              src={ATFSystem}
              alt="ATF System Logo"
            />
            <p className="text-[20px]"> American Tree Farm System</p>
          </div>
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center flex-shrink-0">
            <img
              className="my-2 h-[200px]  w-[220px]"
              src={CSCGrown}
              alt="CSCGrown Logo"
            />
            <p className="text-[20px]"> Certified SC Grown</p>
          </div>
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="my-2 h-[200px]"
              src={HBHeroes}
              alt="HBH Logo"
            />
            <p className="text-[20px]"> Homegrown By Heroes</p>
          </div>
        </div>
      </div>


      <div className="inline-block">
        <div className="animate-moveRight flex justify-center gap-[90px] whitespace-nowrap mx-[45px]">
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="my-2 h-[200px]"
              src={ATFSystem}
              alt="ATF System Logo"
            />
            <p className="text-[20px]"> American Tree Farm System</p>
          </div>
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="my-2 h-[200px]  w-[200px]"
              src={CSCGrown}
              alt="CSCGrown Logo"
            />
            <p className="text-[20px]"> Certified SC Grown</p>
          </div>
          <div className="flex items-center">
            <p className="text-[80px]">○</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="my-2 h-[200px]"
              src={HBHeroes}
              alt="HBH Logo"
            />
            <p className="text-[20px]"> Homegrown By Heroes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoScroller;
