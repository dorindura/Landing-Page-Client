import React from "react";
import FirstCardS5 from "../../images/first-card-section5.png";
import SecondCardS5 from "../../images/second-card-section5.png";

export const FifthSection = () => {
  return (
    <div className="py-10">
      <div className="px-20">
        <div className="flex flex-col justify-center mx-auto gap-6">
          <div className="flex justify-center color-2nd-section">
            Practice Advice
          </div>
          <div className="flex justify-center text-5xl">
            Most Popular Courses
          </div>
          <div className="flex justify-center width-second-section-paraph mx-auto text-center">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </div>
        </div>
        <div className="flex flex-row gap-6 pt-14 justify-center">
          <div>
            <img src={FirstCardS5.src} alt="First Card Section5" />
          </div>
          <div>
            <img src={SecondCardS5.src} alt="Second Card Section5" />
          </div>
        </div>
      </div>
    </div>
  );
};
