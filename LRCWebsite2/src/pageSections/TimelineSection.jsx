import React, { useEffect, useRef } from "react";
import Beekeeping from "../assets/timelinePhotos/Beekeeping.jpeg";
import CowGrazing from "../assets/timelinePhotos/CowGrazing.png";
import Ducks from "../assets/timelinePhotos/Ducks.jpeg";
import FamilyPhoto from "../assets/timelinePhotos/FamilyPhoto.png";
import Grazing from "../assets/timelinePhotos/Grazing.jpeg";
import GroupPhoto from "../assets/timelinePhotos/GroupPhoto.jpeg";
import TreyLeaning from "../assets/timelinePhotos/TreyLeaning.jpeg";
import TimelineVector from "../assets/splashArt/TimelineVector.png";

function TimelineSection(props) {
  const timelineEntries = [
    {
      title: "Family Arrival",
      date: "January 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
      image: FamilyPhoto,
      id: "FamilyArrival",
    },
    {
      title: "First Arrivals",
      date: "March 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
      image: Ducks,
      id: "FirstArrivals",
    },
    {
      title: "The First Grazing",
      date: "April 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
      image: Grazing,
      id: "FirstGrazing",
    },
    {
      title: "Silvopasture Upgrades",
      date: "August 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
      image: CowGrazing,
      id: "SilvopastureUpgrades",
    },
    {
      title: "Group Projects",
      date: "February 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
      image: GroupPhoto,
      id: "GroupProjects",
    },
    {
      title: "Taking it all In",
      date: "July 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
      image: TreyLeaning,
      id: "TakingItAllIn",
    },
    {
      title: "Trying New Things",
      date: "Present Day",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
      image: Beekeeping,
      id: "TryingNewThings",
    },
  ];

  const [timelineEntry, setTimelineEntry] = React.useState(timelineEntries[0]);
  const activeImage=useRef
  

  useEffect(() => {
    console.log(timelineEntry.id)
    console.log(document.getElementById(timelineEntry.id).classList.add("opacity-100"));
    console.log(document.getElementById(timelineEntry.id).classList.add("outline"));
    console.log(document.getElementById(timelineEntry.id).classList.add("shadow-2xl"));
    }, [timelineEntry])


  return (
    <div className="bg-secondary lg:h-[1250px] flex flex-col items-center text-center text-[82px] text-blacklite">
      <h1 className="my-[25px]">
        Old Forrest to <br /> New Beginnings
      </h1>

      <div className="flex flex-row bg-greylite lg:w-[2000px] rounded-2xl">
        <img
          src={timelineEntry.image}
          alt="placeholder"
          className="w-[1400px] h-[650px] rounded-2xl object-cover"
        />
        <div className="text-left mx-[50px] lg:w-[500px] my-[50px]">
          <h1 className="text-[52px]">{timelineEntry.title}</h1>
          <h2 className="text-[32px]">{timelineEntry.date}</h2>
          <p className="text-[30px]">
            {timelineEntry.description}{" "}
          </p>
        </div>
      </div>

      <div>
        <div className="flex">
          {timelineEntries.map((entry, index) => {
            return (
              <div className="flex flex-col justify-center items-center z-10">
                <div className="bg-blacklite h-[200px] w-[200px] object-cover rounded-full mx-[30px] mt-[30px]">
                  <img
                    id = {entry.id}
                    src={entry.image}
                    alt={entry.title}
                    className={`h-[200px] w-[200px] object-cover rounded-full border-blacklite opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer focus:opacity-100 ${entry.title === timelineEntry.title ? "opacity-100" : "opacity-80"}}`}
                    onClick={() => {
                        setTimelineEntry(entry);
                    }}
                  />
                </div>
                <p className="text-[30px] mt-[15px]">{entry.date}</p>
              </div>
            );
          })}
          <div className="absolute h-[200px] w-[2000px] mx-[-100px] mt-[30px] flex items-center z-0">
            <img src={TimelineVector} alt="timeline vector" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineSection;
