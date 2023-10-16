import React, { useEffect, useRef } from "react";
import TimelineVector from "../assets/splashArt/TimelineVector.png";
import timelineEntries from "../assets/data/timelineEntries.jsx";

function TimelineSection(props) {
  const [timelineEntry, setTimelineEntry] = React.useState(timelineEntries[0]);
  

  useEffect(() => {
    console.log(timelineEntry.id)
    console.log(document.getElementById(timelineEntry.id).classList.add("opacity-100"));
    console.log(document.getElementById(timelineEntry.id).classList.add("outline"));
    console.log(document.getElementById(timelineEntry.id).classList.add("shadow-2xl"));
    }, [timelineEntry])


  return (
    <div className="bg-secondary lg:h-[900px] flex flex-col items-center text-center lg:text-[68px] text-[48px]  h-auto text-blacklite">
      <h1 className="mt-[25px] mx-[10px]">
        Old Forest to New Beginnings
      </h1>

      <div>
        <div className="flex lg:items-baseline items-center lg:overflow-hidden overflow-scroll w-[100vw] justify-center lg:mt-[0px] mb-[10px] lg:pl-auto pl-[100px]">
          {timelineEntries.map((entry, index) => {
            return (
              <div className="flex flex-col justify-center items-center z-10">
                <div className="bg-blacklite lg:h-[125px] lg:w-[125px] w-[100px] h-[100px] object-cover rounded-full mx-[15px] mt-[30px]">
                  <img
                    id = {entry.id}
                    src={entry.image}
                    alt={entry.title}
                    className={`h-full w-full object-cover rounded-full border-blacklite opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer focus:opacity-100 ${entry.title === timelineEntry.title ? "opacity-100" : "opacity-80"}}`}
                    onClick={() => {
                        setTimelineEntry(entry);
                    }}
                  />
                </div>
                <p className="lg:text-[24px] text-[24px] mt-[15px]">{entry.date}</p>
              </div>
            );
          })}
          <div className="lg:h-[190px] w-[100vw] lg:w-[1650px] mt-[0px] lg:flex items-center justify-start lg:ml-auto ml-[-15vw] z-0 absolute hidden">
            <img src={TimelineVector} alt="timeline vector" />
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col bg-greylite lg:w-[1400px] lg:h-[525px] h-auto rounded-2xl mx-[25px] lg:mb-auto mb-[50px]">
        <img
          src={timelineEntry.image}
          alt="placeholder"
          className="lg:w-[1000px] w-[400px] lg:h-[525px] h-[400px] rounded-2xl object-cover self-center lg:self-auto"
        />
        <div className="text-left mx-[50px] lg:w-[550px] lg:my-[25px] relative top-[0px] overflow-y-auto">
          <h1 className="lg:text-[44px] text-[34px]">{timelineEntry.title}</h1>
          <h2 className="lg:text-[28px] text-[20px]">{timelineEntry.date}</h2>
          <p className="lg:text-[24px] break-words text-[24px] mb-[25px]">
            {timelineEntry.description}{" "}
          </p>
        </div>
      </div>

     
    </div>
  );
}

export default TimelineSection;
